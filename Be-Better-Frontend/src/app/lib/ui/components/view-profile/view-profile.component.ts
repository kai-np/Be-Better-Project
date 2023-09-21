import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserAction } from 'src/app/lib/data/models/user/userAction';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';

@Component({
  selector: 'ui-view-profile-modal',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  @Input() userInfo: UserInfo;

  challengeFriendButton: ImageButton = {
    imageName: 'tick.png',
    backgroundColour: '#4BAE4F',
    borderColour: 'white',
    buttonText: 'Challenge Friend',
    buttonName: 'challengeFriend',
  };

  removeButton: ImageButton = {
    imageName: 'cancel.png',
    backgroundColour: '#FF3F5B',
    borderColour: 'white',
    buttonText: 'Remove',
    buttonName: 'removeFriend',
  };

  viewJournalButton: ImageButton = {
    imageName: 'book.png',
    backgroundColour: '#25B7D3',
    borderColour: 'white',
    buttonText: 'Journal',
    buttonName: 'viewFriendJournal',
  };
  constructor(private modalController: ModalController) {}
  closeModal() {
    this.modalController.dismiss();
  }

  buttonClicked(buttonName: string) {
    if (buttonName == 'cancelModal') {
      this.modalController.dismiss();
    }
    if (buttonName == 'challengeFriend') {
      const userAction: UserAction = {
        action: 'challenge',
        userInfo: this.userInfo,
      };
      this.modalController.dismiss(userAction);
    }

    if (buttonName == 'removeFriend') {
      const userAction: UserAction = {
        action: 'remove',
        userInfo: this.userInfo,
      };
      this.modalController.dismiss(userAction);
    }

    if (buttonName == 'viewFriendJournal') {
      const userAction: UserAction = {
        action: 'viewJournal',
        userInfo: this.userInfo,
      };
      this.modalController.dismiss(userAction);
    }
  }
  ngOnInit() {}
}
