import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoalInfo } from 'src/app/lib/data/models/goals/goalInfo';
import { AddGoalComponent } from 'src/app/lib/ui/components/add-goal/add-goal.component';
import { ViewGoalModalComponent } from 'src/app/lib/ui/components/view-goal-modal/view-goal-modal.component';
import { GoalsApiService } from '../api-requests/goals/goals-api.service';
import { AuthHandlerService } from '../api-handlers/auth/authHandler';
import { apiRequest } from 'src/app/lib/data/models/core/apiRequest';
import { LogActivityModalComponent } from 'src/app/lib/ui/components/log-activity-modal/log-activity-modal.component';
import { AddMetricModalComponent } from 'src/app/lib/ui/components/add-metric-modal/add-metric-modal.component';
import { ViewActivityModalComponent } from 'src/app/lib/ui/components/view-activity-modal/view-activity-modal.component';
import { ExcerciseLogEntry } from 'src/app/lib/data/models/physcial/excerciseLogEntry';
import { HealthApiService } from '../api-requests/health/health-api.service';

@Injectable({
  providedIn: 'root',
})
export class HealthHelperService {
  constructor(
    private modalController: ModalController,
    private goalAPIHandler: GoalsApiService,
    private authHandler: AuthHandlerService,
    private healthAPIHandler: HealthApiService
  ) {}

  async launchViewActivityModal(
    activityData: ExcerciseLogEntry,
    callBack: any
  ) {
    const modal = await this.modalController.create({
      component: ViewActivityModalComponent,
      componentProps: {
        id: 'app-modal',
        paramID: 123,
        cssClass: 'main',
        paramTitle: '',
        activityInfo: activityData,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        console.log('metrics >>>');
        console.log(dataReturned);
        //this.userHandler.updateUserProfile(dataReturned.data);
      }
    });

    return await modal.present();
  }

  async launchAddMetricModal(callBack: any) {
    const modal = await this.modalController.create({
      component: AddMetricModalComponent,
      componentProps: {
        id: 'app-modal',
        paramID: 123,
        cssClass: 'main',
        paramTitle: '',
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        console.log('metrics >>>');
        console.log(dataReturned);
        //this.userHandler.updateUserProfile(dataReturned.data);
      }
    });

    return await modal.present();
  }

  async launchLogActivitycModal(callBack: any) {
    const modal = await this.modalController.create({
      component: LogActivityModalComponent,
      componentProps: {
        id: 'app-modal',
        paramID: 123,
        cssClass: 'main',
        paramTitle: '',
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        console.log('log activity >>>');
        console.log(dataReturned);
        this.addActivity(dataReturned.data, (added) => {
          if (added) {
            callBack(true);
          }
        });
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

  getUserActivities(callBack: any) {
    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: null,
      };

      this.healthAPIHandler.fetchUserActivitys(apiRequest).subscribe({
        next: (data) => {
          if (data != undefined) {
            console.log('Got activities');
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

  addActivity(activityInfo: any, callBack: any) {
    const activityData = {
      activityType: activityInfo.activityType,
      activityTitle: activityInfo.activityTitle,
      activityTimeSpent: activityInfo.activityTimeSpent,
      activityMetric: activityInfo.activityMetric,
      activityDescription: activityInfo.activityDescription,
    };

    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        console.log('Failed to update');
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: activityData,
      };
      this.healthAPIHandler.addUserActivity(apiRequest).subscribe({
        next: (data) => {
          console.log('Added activity');
          callBack(true);
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }
}
