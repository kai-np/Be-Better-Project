import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoalInfo } from 'src/app/lib/data/models/goals/goalInfo';
import { AddGoalComponent } from 'src/app/lib/ui/components/add-goal/add-goal.component';
import { ViewGoalModalComponent } from 'src/app/lib/ui/components/view-goal-modal/view-goal-modal.component';
import { MyProfileComponent } from 'src/app/lib/ui/modals/my-profile/my-profile.component';
import { AppHelperService } from '../app-helper/appHelper.service';
import { UserHandlerService } from '../api-handlers/users/userHandler/userHandler.service';
import { ChallengeHandlerService } from '../api-handlers/challenges/challengeHandler.service';

import { FriendsManagerModalComponent } from 'src/app/lib/ui/components/friends-manager-modal/friends-manager-modal.component';
import { UserAction } from 'src/app/lib/data/models/user/userAction';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';
import { ViewPublicJournalsComponent } from 'src/app/lib/ui/view-public-journals/view-public-journals.component';
import { ViewProfileComponent } from 'src/app/lib/ui/components/view-profile/view-profile.component';
import { UserFriend } from 'src/app/lib/data/models/user/userFriend';
import { AuthHandlerService } from '../api-handlers/auth/authHandler';

@Injectable({
  providedIn: 'root',
})
export class FriendHelperService {
  userFriends: UserFriend[] = [];

  sampleUserInfo: UserInfo = {
    name: 'John Daa',
    email: 'j@ads.com',
    profilePhotoURL: '/assets/img/ui/man.png',
    publicQuote:
      'Lorem ipsum djakjsdkj jsdka jd kjaldj lnnjnfoi nslkn mlskmklmlsmdlksmd!...',
    completedChallengeStats: {
      societal: 12,
      environmental: 15,
      personal: 9,
    },
    journalEntries: [
      {
        userID: '222',
        journalEntryID: 'DADD',
        dateAdded: '2022/1/12',
        journalType: 'public',
        journalTitle: 'lOREM e ipsum to',
        journalBody: '....',
        journalColour: 'purple',
      },
      {
        userID: '2242',
        journalEntryID: 'D2ADD',
        dateAdded: '2022/1/12',
        journalType: 'public',
        journalTitle: 'lORe3EM e ipsum to',
        journalBody: '....',
        journalColour: 'red',
      },
      {
        userID: '22hh2',
        journalEntryID: 'DAD88D',
        dateAdded: '2022/1/12',
        journalType: 'public',
        journalTitle: 'hhj lOREM e ipsum to',
        journalBody: '....',
        journalColour: 'green',
      },
      {
        userID: '222',
        journalEntryID: 'DADD',
        dateAdded: '2022/1/12',
        journalType: 'public',
        journalTitle: 'lOREM e ipsum to',
        journalBody: '....',
        journalColour: 'purple',
      },
      {
        userID: '2242',
        journalEntryID: 'D2ADD',
        dateAdded: '2022/1/12',
        journalType: 'public',
        journalTitle: 'lORe3EM e ipsum to',
        journalBody: '....',
        journalColour: 'red',
      },
      {
        userID: '22hh2',
        journalEntryID: 'DAD88D',
        dateAdded: '2022/1/12',
        journalType: 'public',
        journalTitle: 'hhj lOREM e ipsum to',
        journalBody: '....',
        journalColour: 'green',
      },
    ],
    publicLink: 'http://share.fd/5445',
    friendToken: 'DAF3554545454545454545',
    friendCode: 'FDA43F',
  };

  constructor(
    private modalController: ModalController,
    private appHelper: AppHelperService,
    private userHandler: UserHandlerService,
    private challengeHandler: ChallengeHandlerService,
    private authHandler: AuthHandlerService
  ) {}

  getActiveFriends() {
    const friends = this.userFriends.filter((f) => f.friendStatus === 'active');
    return friends;
  }

  getPendingFriends(callBack: any) {
    this.authHandler.getUserInfo((userInfo: UserInfo) => {
      const friends = this.userFriends.filter(
        (f) => f.friendID === userInfo.userID && f.friendStatus === 'pending'
      );
      callBack(friends);
    });
  }

  async launchFriendManager() {
    // Da

    this.userHandler.getUsersFriends(async (friends) => {
      this.userFriends = friends;
      console.log('User friends');
      console.log(friends);
      const activeFriends = this.getActiveFriends();

      this.getPendingFriends(async (pendingFriends) => {
        const modal = await this.modalController.create({
          component: FriendsManagerModalComponent,
          componentProps: {
            id: 'app-modal',
            paramID: 123,
            cssClass: 'main',
            paramTitle: '',
            activeFriends: activeFriends,
            pendingFriends: pendingFriends,
          },
        });

        modal.onDidDismiss().then((dataReturned) => {
          if (dataReturned.data != undefined) {
            console.log('Friend ID=');
            this.showFriendProfileModal(dataReturned.data);
            var userAction: UserAction = dataReturned.data;
          }
        });

        return await modal.present();
      });
    });
  }

  async showUsersPublicJournalEntries(usersInfo: UserInfo) {
    const modal = await this.modalController.create({
      component: ViewPublicJournalsComponent,
      componentProps: {
        id: 'app-modal',
        paramID: 123,
        cssClass: 'main',
        paramTitle: '',
        userInfo: usersInfo,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        //this.userHandler.updateUserProfile(dataReturned.data);
      }
    });

    return await modal.present();
  }

  async showFriendProfileModal(friendID: string) {
    this.userHandler.getUserProfileByID(
      friendID,
      async (friendInfo: UserInfo) => {
        console.log(friendInfo);
        const modal = await this.modalController.create({
          component: ViewProfileComponent,
          componentProps: {
            id: 'app-modal',
            paramID: 123,
            cssClass: 'main',
            paramTitle: '',
            userInfo: friendInfo[0],
          },
        });

        modal.onDidDismiss().then(async (dataReturned) => {
          if (dataReturned.data != undefined) {
            var userAction: UserAction = dataReturned.data;
            if (userAction.action == 'remove') {
              this.userHandler.removeUserFriend(
                userAction.userInfo.authToken,
                (removed) => {
                  if (removed) {
                    console.log('Friend removed');
                  }
                }
              );
            }

            if (userAction.action == 'challenge') {
              // this.challengeHandler.challengeFriend(userAction.userInfo);
            }

            if (userAction.action == 'viewJournal') {
              // this.showUsersPublicJournalEntries(userAction.userInfo);
            }
          }
        });

        return await modal.present();
      }
    );
  }

  async showEditProfileModal() {
    this.authHandler.getUserInfo((userInfo: UserInfo) => {
      this.userHandler.getUserProfileByID(userInfo.userID, async (userData) => {
        console.log(userData);
        const modal = await this.modalController.create({
          component: MyProfileComponent,
          componentProps: {
            id: 'app-modal',
            paramID: 123,
            cssClass: 'main',
            paramTitle: '',
            userInfo: userData[0],
          },
        });

        modal.onDidDismiss().then((dataReturned) => {
          if (dataReturned.data != undefined) {
            console.log('>>>');
            console.log(dataReturned.data);
            this.userHandler.updateUserProfile(dataReturned.data, (result) => {
              console.log(result);
            });
          }
        });

        return await modal.present();
      });
    });
  }
}
