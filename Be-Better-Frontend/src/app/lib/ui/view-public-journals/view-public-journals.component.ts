import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserAction } from 'src/app/lib/data/models/user/userAction';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';
import { TextJournalEntry } from '../../data/models/journals/textJournalEntry';

@Component({
  selector: 'ui-view-public-journals-modal',
  templateUrl: './view-public-journals.component.html',
  styleUrls: ['./view-public-journals.component.scss'],
})
export class ViewPublicJournalsComponent implements OnInit {
  @Input() userInfo: UserInfo;
  publicJournals: TextJournalEntry[];
  backToProfileButton: ImageButton = {
    imageName: 'chevron.png',
    backgroundColour: '#4BAE4F',
    borderColour: 'white',
    buttonText: 'Back to Profile',
    buttonName: 'backButton',
  };

  constructor(private modalController: ModalController) {}
  closeModal() {
    this.modalController.dismiss();
  }

  journalClicked(journalEntryID: string) {
    console.log(journalEntryID);
  }

  buttonClicked(buttonName: string) {
    if (buttonName == 'backButton') {
      this.modalController.dismiss('backButton');
    }
  }
  ngOnInit() {
    console.log('INIT');
    console.log(this.userInfo);
    this.publicJournals = this.userInfo.journalEntries.map((j) => {
      if (j.journalType === 'public') {
        return j;
      }
    });
  }
}
