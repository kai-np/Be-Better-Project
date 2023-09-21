import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasicButton } from 'src/app/lib/data/models/ui/basicButton';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserFriend } from 'src/app/lib/data/models/user/userFriend';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';
import { AuthHandlerService } from 'src/app/services/api-handlers/auth/authHandler';
import { UserHandlerService } from 'src/app/services/api-handlers/users/userHandler/userHandler.service';
import { FriendHelperService } from 'src/app/services/feature-helpers/friend-helper.service';

@Component({
  selector: 'ui-friends-list-item',
  templateUrl: './friends-list-item.component.html',
  styleUrls: ['./friends-list-item.component.scss'],
})
export class FriendsListItemComponent implements OnInit {
  @Input() friendInfo: UserFriend;
  @Input() pendingMode: boolean = false;
  @Output() friendClicked = new EventEmitter();
  friendID = '';
  constructor(
    private userHandler: UserHandlerService,
    private friendHandler: FriendHelperService,
    private authHandler: AuthHandlerService
  ) {}

  friendClickedEmit() {
    this.friendClicked.emit(this.friendID);
  }

  acceptFriend() {
    this.userHandler.acceptUserFriend(
      this.friendInfo.friendToken,
      (friendAdded) => {
        console.log('Friend accepted');
      }
    );
  }
  getFriendInfo() {
    if (this.pendingMode == false) {
      this.authHandler.getUserInfo((primaryUserInfo: UserInfo) => {
        if (primaryUserInfo.userID != this.friendInfo.friendID) {
          this.friendID = this.friendInfo.friendID;
        } else {
          this.friendID = this.friendInfo.userID;
        }
        this.userHandler.getUserProfileByID(
          this.friendID,
          (userInfo: UserInfo) => {
            console.log('>>>>');
            console.log(userInfo);
            this.friendInfo.name = userInfo[0].name;
            this.friendInfo.profilePhotoURL = userInfo[0].profilePhotoURL;
          }
        );
      });
    }
    if (this.pendingMode == true) {
      this.userHandler.getUserProfileByID(
        this.friendInfo.userID,
        (userInfo: UserInfo) => {
          console.log('>>>>');
          console.log(userInfo);
          this.friendInfo.name = userInfo[0].name;
          this.friendInfo.profilePhotoURL = userInfo[0].profilePhotoURL;
        }
      );
    }
  }

  ngOnInit() {
    this.getFriendInfo();
  }
}
