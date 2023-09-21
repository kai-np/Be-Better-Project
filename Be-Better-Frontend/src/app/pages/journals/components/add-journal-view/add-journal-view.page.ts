import { Component, OnInit } from '@angular/core';
import { TextJournalEntry } from 'src/app/lib/data/models/journals/textJournalEntry';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { ActivatedRoute, Router } from '@angular/router';
import { journalSettings } from 'src/app/lib/data/models/ui/journalSettings';
import { JournalHelperService } from 'src/app/services/feature-helpers/journal-helper.service';

@Component({
  selector: 'app-add-text-journal',
  templateUrl: './add-journal-view.page.html',
  styleUrls: ['./add-journal-view.page.scss'],
})
export class AddTextJournalPage implements OnInit {
  pageHeaderTitle = 'Loading...';
  pageHeaderBGColour = '#e71279';
  journalType = '';

  deleteJournalButton: ImageRectangleButton = {
    buttonName: 'deleteJournalButton',
    buttonText: 'Cancel + Delete',
    backgroundColour: '#ab0000',
    borderColour: 'black',
    imageName: 'bin.png',
    active: false,
  };

  saveJournalButton: ImageRectangleButton = {
    buttonName: 'saveJournalButton',
    buttonText: 'Save Forever',
    backgroundColour: '#44a122',
    borderColour: 'black',
    imageName: 'save3.png',
    active: false,
  };

  constructor(
    private journalHandler: JournalHelperService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // addJournalButton: ImageRectangleButton = {
  //   buttonName: 'addJournal',
  //   buttonText: 'Add Journal',
  //   backgroundColour: '#3a8d93',
  //   borderColour: 'white',
  //   imageName: 'add.png',
  //   active: false,
  // };

  saveJournalEntry(journalData: any) {
    const journalInfo = {
      journalTitle: journalData.journalTitle,
      journalBody: journalData.journalBody,
      journalType: this.journalType,
    };

    this.journalHandler.saveNewJournalEntry(journalInfo);
    this.router.navigate(['/journals/' + this.journalType]);
  }

  cancelJournalAdd() {
    this.router.navigate(['/journals/' + this.journalType]);
  }

  getJournalSettings() {
    this.route.queryParams.subscribe((params) => {
      if (params.type == undefined) {
        this.router.navigate(['/journals']);
      }
      console.log(params); // { orderby: "price" }

      if (params.type == 'personal') {
        this.pageHeaderBGColour = '#E71279';
        this.pageHeaderTitle = 'Add Personal Journal';
        this.journalType = params.type;
      } else if (params.type == 'public') {
        this.pageHeaderBGColour = '#6C3A93';
        this.pageHeaderTitle = 'Add Public Journal';
        this.journalType = params.type;
      } else {
        this.router.navigate(['/journals']);
      }
    });
  }

  ngOnInit() {
    this.getJournalSettings();
  }
}
