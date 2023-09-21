import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextJournalEntry } from 'src/app/lib/data/models/journals/textJournalEntry';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { JournalHelperService } from 'src/app/services/feature-helpers/journal-helper.service';

@Component({
  selector: 'app-journals-personal',
  templateUrl: './personal-journal.page.html',
  styleUrls: ['./personal-journal.page.scss'],
})
export class PersonalJournalPage implements OnInit {
  constructor(
    private router: Router,
    private journalHandler: JournalHelperService
  ) {}

  addJournal() {
    this.router.navigate(['/journals/add?type=personal']);
  }
  addJournalButton: ImageRectangleButton = {
    buttonName: 'addJournal',
    buttonText: 'Add Journal',
    backgroundColour: '#1567e1',
    borderColour: 'white',
    imageName: 'add.png',
    active: false,
  };
  personalJournalEntries: TextJournalEntry[] = [];
  ngOnInit() {
    this.getPersonalJournals();
  }

  getPersonalJournals() {
    this.journalHandler.getUserJournals((journals: TextJournalEntry[]) => {
      if (journals) {
        const personalJournals = journals.filter(
          (j) => j.journalType === 'personal'
        );
        this.personalJournalEntries = personalJournals;
      }
    });
  }

  journalClicked(journalInfo: TextJournalEntry) {
    //
    console.log('Journal clicked:');
    // this.router.navigate([ en '/journals/view?id=' + journalInfo.journalEntryID]);
    console.log(journalInfo);
  }
}
