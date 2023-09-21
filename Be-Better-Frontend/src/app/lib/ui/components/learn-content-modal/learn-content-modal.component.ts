import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserAction } from 'src/app/lib/data/models/user/userAction';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';
import { learnEntry } from 'src/app/lib/data/models/core/learnEntry';

@Component({
  selector: 'ui-learn-content-modal',
  templateUrl: './learn-content-modal.component.html',
  styleUrls: ['./learn-content-modal.component.scss'],
})
export class LearnContentModalComponent implements OnInit {

  @Input() learnContentEntry : learnEntry;

  backToDash: ImageButton = {
    imageName: 'chevron.png',
    backgroundColour: '#4BAE4F',
    borderColour: 'white',
    buttonText: 'Back to Forest',
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

  }
}
