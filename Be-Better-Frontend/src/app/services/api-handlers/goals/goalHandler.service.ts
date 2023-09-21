import { Injectable, OnInit } from '@angular/core';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ModalController } from '@ionic/angular';
import { ModalHoldingComponent } from 'src/app/lib/ui/modals/modal-holding-container/modal-holding-container.component';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';
import { MyProfileComponent } from 'src/app/lib/ui/modals/my-profile/my-profile.component';
import { AppHelperService } from 'src/app/services/app-helper/appHelper.service';
import { RandomChallengeModalComponent } from 'src/app/lib/ui/components/random-challenege-modal/random-challenege-modal.component';
import { ChallengeTemplateInfo } from 'src/app/lib/data/models/challenges/challengeTemplateInfo';
import { DataService } from '../../data/data.service';
import { ChallengeExplorerModalComponent } from 'src/app/lib/ui/components/challenge-explorer/challenge-explorer.component';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';
import { ViewChallengeModalComponent } from 'src/app/lib/ui/components/view-challenge-modal/view-challenge-modal.component';
import { AuthHandlerService } from '../auth/authHandler';
import { apiRequest } from 'src/app/lib/data/models/core/apiRequest';
import { ChallengesApiService } from '../../api-requests/challenges/challenges-api.service';

@Injectable({
  providedIn: 'root',
})
export class GoalHandlerService implements OnInit {
  constructor(
    private appHelper: AppHelperService,
    public modalController: ModalController,
    private challengeHandler: ChallengesApiService,
    public dataService: DataService,
    private authHandler: AuthHandlerService
  ) {
    appHelper.startLogger({ endPoint: 'Challenge Handler', logMode: 'debug' });

    // this.fetchUserChallenges();
  }

  completeChallenge(challenegeInfo: UserChallenge, callBack: any) {
    var challengeData = challenegeInfo;
    challengeData.challengeStatus = 'complete';
    challengeData.completedCount = 1;

    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        console.log('Failed to update');
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: challengeData,
      };
      this.challengeHandler.updateUserChallenge(apiRequest).subscribe({
        next: (data) => {
          console.log('Updated challenge');
          callBack(true);
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  endChallenge(challenegeInfo: UserChallenge) {
    var challengeData = challenegeInfo;
    console.log('>>>>>>>>');
    console.log(challengeData);
    challengeData.challengeStatus = 'ended';
    challengeData.failedCount = 1;

    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        console.log('Failed to update');
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: challengeData,
      };
      this.challengeHandler.updateUserChallenge(apiRequest).subscribe({
        next: (data) => {
          console.log('Updated challenge');
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
    });
  }

  fetchUserChallenges(callBack: any) {
    this.getUserChallenges((challenges) => {
      if (challenges != false) {
        callBack(challenges);
      } else {
        // Error
      }
    });
  }

  ngOnInit(): void {
    console.log('Fetching challenge templates...');
    this.getChallengeTemplates((templates) => {
      if (templates != false) {
      } else {
        // Error
      }
    });
  }

  startUserChallenge(challengeData: any, callBack: any) {
    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: challengeData,
      };

      this.challengeHandler.startUserChallenge(apiRequest).subscribe({
        next: (data) => {
          console.log('Started user challenge');

          callBack(true);
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  getUserChallenges(callBack: any) {
    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: null,
      };

      this.challengeHandler.getUserChallenges(apiRequest).subscribe({
        next: (data) => {
          if (data != undefined) {
            console.log('Got challenges');
            console.log(data);
            callBack(data);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }
  getChallengeTemplates(callBack: any) {
    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: null,
      };

      this.challengeHandler.getChallengeTemplates(apiRequest).subscribe({
        next: (data) => {
          if (data != undefined) {
            console.log('Got templates:');
            console.log(data);
            callBack(data);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  async launchRandomChallenegeModal() {
    const modal = await this.modalController.create({
      component: RandomChallengeModalComponent,
      componentProps: {
        id: 'app-modal',
        paramID: 123,
        cssClass: 'main',
        paramTitle: '',
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != false) {
        console.log('rand challenege...');
        //this.userHandler.updateUserProfile(dataReturned.data);
      }
    });

    return await modal.present();
  }

  challengeFriend(friendInfo: UserInfo) {
    this.appHelper.log('Friend challenged');
    this.appHelper.logData(friendInfo);
  }

  async launchViewChallengeModal(
    currentChallenge: UserChallenge,
    callBack?: any
  ) {
    const modal = await this.modalController.create({
      component: ViewChallengeModalComponent,
      componentProps: {
        id: 'app-modal',
        paramID: 123,
        cssClass: 'main',
        paramTitle: '',
        challengeInfo: currentChallenge,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        console.log(dataReturned.data);

        if (dataReturned.data.action == 'completeChallenge') {
          this.completeChallenge(
            dataReturned.data.challengeInfo,
            (executed) => {
              if (executed) {
                callBack(true);
              }
            }
          );
        }

        if (dataReturned.data.action == 'endChallenge') {
          this.endChallenge(dataReturned.data.challengeInfo);
        }
        //this.userHandler.updateUserProfile(dataReturned.data);
      }
    });

    return await modal.present();
  }

  async launchChallengeExplorerModal(callBack?: any) {
    const modal = await this.modalController.create({
      component: ChallengeExplorerModalComponent,
      componentProps: {
        id: 'app-modal',
        paramID: 123,
        cssClass: 'main',
        paramTitle: '',
        availableChallenges: this.availableChallenges,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        const data = dataReturned.data;
        if (data.action == 'randomChallenge') {
          this.launchRandomChallenegeModal();
        } else if (data.action == 'startChallenge') {
          console.log('User started challenge:');
          console.log(data.data);
          this.initiateUserChallenge(data.data, (complete) => {
            if (complete) {
              callBack(true);
            }
          });
        }
      }
    });

    return await modal.present();
  }

  initiateUserChallenge(templateInfo: ChallengeTemplateInfo, callBack: any) {
    const challengeInfo = {
      challengeTemplateID: templateInfo.challengeTemplateID,
      challengeFrequency: 'ONCE',
      challengeType: templateInfo.challengeType,
      challengeName: templateInfo.challengeName,
    };

    this.startUserChallenge(challengeInfo, (added) => {
      if (added == true) {
        console.log('Challenge added!');
        callBack(true);
      } else {
        console.log('Challenge error');
      }
    });
  }
}
