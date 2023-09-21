import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExcerciseLogEntry } from 'src/app/lib/data/models/physcial/excerciseLogEntry';

import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserFriend } from 'src/app/lib/data/models/user/userFriend';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';
import { AuthHandlerService } from 'src/app/services/api-handlers/auth/authHandler';
import { UserHandlerService } from 'src/app/services/api-handlers/users/userHandler/userHandler.service';
import { FriendHelperService } from 'src/app/services/feature-helpers/friend-helper.service';

@Component({
  selector: 'ui-friends-manager-modal',
  templateUrl: './friends-manager-modal.component.html',
  styleUrls: ['./friends-manager-modal.component.scss'],
})
export class FriendsManagerModalComponent implements OnInit {
  @Input() activePage: string = 'allFriends';
  @Input() activeFriends: UserFriend[];
  @Input() pendingFriends: UserFriend[];

  usersFriendCode: string = 'DJDAKDD';
  addFriendButton: ImageRectangleButton = {
    buttonName: 'addFriend',
    buttonText: 'Add Friend',
    backgroundColour: '#1567e1',
    borderColour: 'white',
    imageName: 'add.png',
    active: false,
  };

  closeButton: ImageButton = {
    imageName: 'cancel.png',
    backgroundColour: '#FF3F5B',
    borderColour: 'white',
    buttonText: 'Cancel',
    buttonName: 'closeModal',
  };

  constructor(
    private modalController: ModalController,
    private authHandler: AuthHandlerService,
    private friendHandler: UserHandlerService,
    private userHandler: UserHandlerService
  ) {}
  closeModal() {
    this.modalController.dismiss();
  }

  getFriendsInfo() {}

  getUserInfo() {
    this.authHandler.getUserInfo((userInfo: UserInfo) => {
      this.usersFriendCode = userInfo.friendCode;
    });
  }
  addFriend(friendCode: string) {
    this.friendHandler.addUserFriend(friendCode, (friendAdded) => {
      console.log('Friend added');
    });
  }

  buttonClicked(buttonName: string, data?: any) {
    if (buttonName == 'closeModal') {
      this.modalController.dismiss();
    }
  }

  activeFriendCLicked(friendID: string) {
    this.modalController.dismiss(friendID);
  }

  changePage(page: string) {
    this.activePage = page;
  }
  ngOnInit() {
    this.getUserInfo();
    // this.activePage = this.startPage;
  }
}
