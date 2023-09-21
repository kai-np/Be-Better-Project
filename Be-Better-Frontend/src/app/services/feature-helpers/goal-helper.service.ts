import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoalInfo } from 'src/app/lib/data/models/goals/goalInfo';
import { AddGoalComponent } from 'src/app/lib/ui/components/add-goal/add-goal.component';
import { ViewGoalModalComponent } from 'src/app/lib/ui/components/view-goal-modal/view-goal-modal.component';
import { GoalsApiService } from '../api-requests/goals/goals-api.service';
import { AuthHandlerService } from '../api-handlers/auth/authHandler';
import { apiRequest } from 'src/app/lib/data/models/core/apiRequest';

@Injectable({
  providedIn: 'root',
})
export class GoalHelperService {
  constructor(
    private modalController: ModalController,
    private goalAPIHandler: GoalsApiService,
    private authHandler: AuthHandlerService
  ) {}

  async launchAddGoalModal(fitnessOnly: boolean = false, callBack?: any) {
    const modal = await this.modalController.create({
      component: AddGoalComponent,
      componentProps: {
        id: 'app-modal',
        paramID: 123,
        cssClass: 'main',
        paramTitle: '',
        fitnessOnly: fitnessOnly,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        console.log(dataReturned.data);
        this.addGoal(dataReturned.data, (added) => {
          if (added) {
            callBack(true);
          }
        });
        //this.userHandler.updateUserProfile(dataReturned.data);
      }
    });

    return await modal.present();
  }

  async launchGoalModal(goalData: GoalInfo, callBack: any) {
    const modal = await this.modalController.create({
      component: ViewGoalModalComponent,
      componentProps: {
        id: 'app-modal',
        paramID: 123,
        cssClass: 'main',
        paramTitle: '',
        goalInfo: goalData,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        console.log(dataReturned.data);
        const goalAction = dataReturned.data;

        if (goalAction.action == 'complete') {
          this.completeGoal(goalAction.goalInfo, (completed) => {
            if (completed) {
              callBack(true);
            }
          });
        }

        if (goalAction.action == 'delete') {
          this.removeGoal(goalAction.goalID, (completed) => {
            console.log(goalAction.goalID);
            if (completed) {
              callBack(true);
            }
          });
        }
        //this.userHandler.updateUserProfile(dataReturned.data);
      }
    });

    return await modal.present();
  }

  completeGoal(goalInfo: GoalInfo, callBack: any) {
    var goalData = goalInfo;
    goalData.goalStatus = 'complete';
    goalData.statCompletedCount = '1';

    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        console.log('Failed to update');
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: goalData,
      };
      this.goalAPIHandler.updateUserGoal(apiRequest).subscribe({
        next: (data) => {
          console.log('Updated goal');
          callBack(true);
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  removeGoal(goalID: string, callBack: any) {
    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        console.log('Failed to update');
      }
      const goalInfo = { goalID: goalID };
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: goalInfo,
      };
      console.log(apiRequest);
      this.goalAPIHandler.removeUserGoal(apiRequest).subscribe({
        next: (data) => {
          console.log('Removed goal');
          callBack(true);
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  getUserGoals(callBack: any) {
    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: null,
      };

      this.goalAPIHandler.fetchUserGoals(apiRequest).subscribe({
        next: (data) => {
          if (data != undefined) {
            console.log('Got goals');
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

  addGoal(goalInfo: any, callBack: any) {
    const goalData = {
      goalTitle: goalInfo.goalTitle,
      goalFrequency: goalInfo.goalFrequency,
      goalType: goalInfo.goalType,
      goalDescription: goalInfo.goalDescription,
    };

    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        console.log('Failed to update');
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: goalData,
      };
      this.goalAPIHandler.addUserGoal(apiRequest).subscribe({
        next: (data) => {
          console.log('Added goal');
          callBack(true);
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  filterGoalArray(goalInfoArray: GoalInfo[]): {
    completeGoals: GoalInfo[];
    defaultGoals: GoalInfo[];
    shortTermGoals: GoalInfo[];
    longTermGoals: GoalInfo[];
    fitnessGoals: GoalInfo[];
  } {
    const completeGoals = goalInfoArray.filter(
      (goal) => goal.goalStatus === 'complete'
    );
    const defaultGoals = goalInfoArray.filter(
      (goal) => goal.goalType === 'default' && goal.goalStatus === 'in-progress'
    );
    const shortTermGoals = goalInfoArray.filter(
      (goal) =>
        goal.goalType === 'shortTerm' && goal.goalStatus === 'in-progress'
    );
    const longTermGoals = goalInfoArray.filter(
      (goal) =>
        goal.goalType === 'longTerm' && goal.goalStatus === 'in-progress'
    );
    const fitnessGoals = goalInfoArray.filter(
      (goal) => goal.goalType === 'fitness' && goal.goalStatus === 'in-progress'
    );

    return {
      completeGoals,
      defaultGoals,
      shortTermGoals,
      longTermGoals,
      fitnessGoals,
    };
  }
}
