import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GratitudeJournalEntry } from 'src/app/lib/data/models/journals/gratitudeJournalEntry';
import { TextJournalEntry } from 'src/app/lib/data/models/journals/textJournalEntry';
import { gratitudeDate } from 'src/app/lib/data/models/ui/gratitudeDate';
import { gratitudeEntrySave } from 'src/app/lib/data/models/ui/gratitudeEntrySave';
import { gratitudeEntrySettings } from 'src/app/lib/data/models/ui/gratitudeEntrySettings';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { JournalHelperService } from 'src/app/services/feature-helpers/journal-helper.service';

@Component({
  selector: 'app-gratitude-journal',
  templateUrl: './gratitude-journal.page.html',
  styleUrls: ['./gratitude-journal.page.scss'],
})
export class GratitudeJournalPage implements OnInit {
  constructor(
    private router: Router,
    private journalHandler: JournalHelperService
  ) {
    this.fetchJournals();
  }

  gratitudeJournals: GratitudeJournalEntry[] = [];
  currentlyViewing: GratitudeJournalEntry;

  entryConfig: gratitudeEntrySettings = {
    mode: 'create',
  };

  newJournalAdded(entry: gratitudeEntrySave) {
    console.log(entry);

    this.journalHandler.addGratitudeJounal(entry);
    this.fetchJournals();
  }

  addJournal() {
    this.router.navigate(["'/journals/add?type=public'"]);
  }
  addJournalButton: ImageRectangleButton = {
    buttonName: 'addJournal',
    buttonText: 'Add Journal',
    backgroundColour: '#1567e1',
    borderColour: 'white',
    imageName: 'add.png',
    active: false,
  };

  getEntry(dayData: gratitudeDate) {
    for (let entry of this.gratitudeJournals) {
      if (
        entry.day == dayData.day &&
        entry.month == dayData.month &&
        entry.year == dayData.year
      ) {
        this.entryConfig.mode = 'view';
        this.currentlyViewing = entry;
      }
    }
  }
  dayClicked(dayData: gratitudeDate) {
    console.log(dayData);
    this.getEntry(dayData);
  }

  getEntryForToday() {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    for (let entry of this.gratitudeJournals) {
      console.log('>' + entry.month);
      if (entry.day == day && entry.month - 1 == month && entry.year == year) {
        return entry;
      }
    }

    return null;
  }

  checkEntryForToday() {
    if (this.getEntryForToday() != null) {
      this.entryConfig.mode = 'view';
      this.currentlyViewing = this.getEntryForToday();
    } else {
      this.entryConfig.mode = 'create';
    }
  }

  fetchJournals() {
    this.journalHandler.getUserGratitudeJournals(
      (gratitudeJournals: GratitudeJournalEntry[]) => {
        if (gratitudeJournals) {
          console.log('Fetched journals >');
          const processedJournals: GratitudeJournalEntry[] = [];
          gratitudeJournals.forEach((j) => {
            var pJ = j;
            pJ.textEntries = JSON.parse(j.textEntries);
            pJ.month = j.month + 1;
            processedJournals.push(pJ);
          });
          this.gratitudeJournals = processedJournals;
          console.log(processedJournals);
          this.checkEntryForToday();
        }
      }
    );
  }

  ngOnInit() {
    this.fetchJournals();
  }
}
