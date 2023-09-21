import { Injectable } from '@angular/core';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ModalController } from '@ionic/angular';
import { ModalHoldingComponent } from 'src/app/lib/ui/modals/modal-holding-container/modal-holding-container.component';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';
import { MyProfileComponent } from 'src/app/lib/ui/modals/my-profile/my-profile.component';
import { AppHelperService } from '../app-helper/appHelper.service';
import { UserHandlerService } from '../api-handlers/users/userHandler/userHandler.service';
import { ViewProfileComponent } from 'src/app/lib/ui/components/view-profile/view-profile.component';
import { ViewPublicJournalsComponent } from 'src/app/lib/ui/view-public-journals/view-public-journals.component';
import { UserAction } from 'src/app/lib/data/models/user/userAction';
import { ChallengeHandlerService } from '../api-handlers/challenges/challengeHandler.service';
import { Router } from '@angular/router';
import { ChallengeExplorerModalComponent } from 'src/app/lib/ui/components/challenge-explorer/challenge-explorer.component';
import { FriendsManagerModalComponent } from 'src/app/lib/ui/components/friends-manager-modal/friends-manager-modal.component';
import { FriendHelperService } from '../feature-helpers/friend-helper.service';
import { GoalHelperService } from '../feature-helpers/goal-helper.service';

@Injectable({
  providedIn: 'root',
})
export class ButtonHandlerService {
  async showChallengeExplorerModal() {
    const modal = await this.modalController.create({
      component: ChallengeExplorerModalComponent,
      componentProps: {
        id: 'app-modal',
        paramID: 123,
        cssClass: 'main',
        paramTitle: '',
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        // this.userHandler.updateUserProfile(dataReturned.data);
      }
    });

    return await modal.present();
  }

  constructor(
    private modalController: ModalController,
    private appHelper: AppHelperService,
    private userHandler: UserHandlerService,
    private challengeHandler: ChallengeHandlerService,
    private router: Router,
    private friendHandler: FriendHelperService,
    private goalHandler: GoalHelperService
  ) {
    appHelper.startLogger({ endPoint: 'Button Handler', logMode: 'debug' });
  }

  handleButtonClick(buttonCategory: string, buttonName: string) {
    if (buttonCategory == 'aboutApp') {
      this.handleExtrasButton(buttonName);
    }
    if (buttonCategory == 'myWellbeing') {
      this.handleMyWellbeingButtons(buttonName);
    }
    if (buttonCategory == 'myMind') {
      this.handleMyMindButtons(buttonName);
    }
    if (buttonCategory == 'challenges') {
      this.handleChallengesButtons(buttonName);
    }
    if (buttonCategory == 'aboutApp') {
      this.handleChallengesButtons(buttonName);
    }
  }

  handleChallengesButtons(buttonName: string) {
    if (buttonName == 'currentC') {
      this.router.navigate(['/challenges']);
    }
    if (buttonName == 'startChallenge') {
      this.challengeHandler.launchChallengeExplorerModal();
    }
    if (buttonName == 'invites') {
      this.router.navigate(['/challenges']);
    }
    if (buttonName == 'myGoals') {
      this.router.navigate(['/goals']);
    }
    if (buttonName == 'addGoal') {
      this.goalHandler.launchAddGoalModal(false, (added) => {
        //
      });
    }
  }

  handleMyMindButtons(buttonName: string) {
    if (buttonName == 'myJournal') {
      this.router.navigate(['/journals']);
    }

    if (buttonName == 'myBody') {
      this.router.navigate(['/my-body']);
    }

    if (buttonName == 'learn') {
      this.router.navigate(['/learn']);
    }

    if (buttonName == 'gratitude') {
      this.router.navigate(['/journals/gratitude']);
    }
  }

  handleMyWellbeingButtons(buttonName: string) {
    if (buttonName == 'myBody') {
      this.router.navigate(['/my-body']);
    }
    if (buttonName == 'excercise') {
      this.router.navigate(['/my-body']);
    }
  }

  handleExtrasButton(buttonName: string) {
    if (buttonName == 'myProfile') {
      this.friendHandler.showEditProfileModal();
    }

    if (buttonName == 'friends') {
      this.friendHandler.launchFriendManager();
    }
    if (buttonName == 'logout') {
      this.router.navigate(['/start']);
    }

    if (buttonName == 'challengeFriend') {
      //  this.friendHandler.showFriendProfileModal();
    }

    if (buttonName == 'myFriends') {
      this.friendHandler.launchFriendManager();
    }
    console.log(buttonName);
  }
}
