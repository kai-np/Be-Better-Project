import { Component, OnInit } from '@angular/core';
import { TextJournalEntry } from 'src/app/lib/data/models/journals/textJournalEntry';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { ActivatedRoute, Router } from '@angular/router';
import { journalSettings } from 'src/app/lib/data/models/ui/journalSettings';
import { JournalHelperService } from 'src/app/services/feature-helpers/journal-helper.service';

@Component({
  selector: 'app-view-text-journal',
  templateUrl: './view-journal-view.page.html',
  styleUrls: ['./view-journal-view.page.scss'],
})
export class ViewTextJournalPage implements OnInit {
  pageHeaderTitle = 'Loading...';
  pageHeaderBGColour = '#e71279';
  journalType = '';
  journalTitle = '';
  journalBody = '';
  authorsName = 'Daniel';

  returnButton: ImageRectangleButton = {
    buttonName: 'returnButton',
    buttonText: 'Return Back',
    backgroundColour: '#dc1861',
    borderColour: 'black',
    imageName: 'previous.png',
    active: false,
  };

  constructor(
    private journalHandler: JournalHelperService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  returnBack() {
    this.router.navigate(['/journals/' + this.journalType]);
  }

  getJournalEntry() {
    this.route.queryParams.subscribe((params) => {
      const journalID = params.id;
      if (journalID == undefined) {
        this.router.navigate(['/journals']);
      }
      console.log(journalID);

      this.journalHandler.getUserJournals((journals: TextJournalEntry[]) => {
        const journalInfo: TextJournalEntry = journals.filter(
          (j) => j.journalEntryID === journalID
        )[0];
        if (journalInfo == undefined) {
          this.router.navigate(['/journals']);
        }

        if (journalInfo.journalType == 'personal') {
          this.pageHeaderBGColour = '#E71279';
          this.pageHeaderTitle = 'Personal Journal';
          this.journalType = 'personal';
        } else if (journalInfo.journalType == 'public') {
          this.pageHeaderBGColour = '#6C3A93';
          this.pageHeaderTitle = this.authorsName + 's Journal';
          this.journalType = journalInfo.journalType;
        } else {
          this.router.navigate(['/journals']);
        }
        this.journalTitle = journalInfo.journalTitle;
        this.journalBody = journalInfo.journalBody;
      });
    });
  }

  ngOnInit() {
    this.getJournalEntry();
  }
}
