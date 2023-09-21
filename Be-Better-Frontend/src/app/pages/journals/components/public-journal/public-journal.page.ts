import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextJournalEntry } from 'src/app/lib/data/models/journals/textJournalEntry';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { JournalHelperService } from 'src/app/services/feature-helpers/journal-helper.service';

@Component({
  selector: 'app-journals-public',
  templateUrl: './public-journal.page.html',
  styleUrls: ['./public-journal.page.scss'],
})
export class PublicJournalPage implements OnInit {
  constructor(
    private router: Router,
    private journalHandler: JournalHelperService
  ) {}

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
  publicJournalEntries: TextJournalEntry[] = [];
  ngOnInit() {
    this.getPublicJournals();
  }

  getPublicJournals() {
    this.journalHandler.getUserJournals((journals: TextJournalEntry[]) => {
      if (journals) {
        const personalJournals = journals.filter(
          (j) => j.journalType === 'public'
        );
        this.publicJournalEntries = personalJournals;
      }
    });
  }

  journalClicked(journalInfo: TextJournalEntry) {
    //
    console.log('Journal clicked:');
    console.log(journalInfo);
  }
}
