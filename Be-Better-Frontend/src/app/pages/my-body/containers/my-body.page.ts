import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';
import { Test } from 'src/app/lib/data/models/test';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { DataService } from '../../../services/data/data.service';
import { ButtonHandlerService } from 'src/app/services/buttonHandler/buttonHandler.service';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';
import { ViewChallengeModalComponent } from 'src/app/lib/ui/components/view-challenge-modal/view-challenge-modal.component';
import { ExcerciseLogEntry } from 'src/app/lib/data/models/physcial/excerciseLogEntry';
import { GoalInfo } from 'src/app/lib/data/models/goals/goalInfo';
import { GoalsGridContainer } from 'src/app/lib/data/models/ui/goalsGrid';
import { AddMetricModalComponent } from 'src/app/lib/ui/components/add-metric-modal/add-metric-modal.component';
import { LogActivityModalComponent } from 'src/app/lib/ui/components/log-activity-modal/log-activity-modal.component';
import { ViewGoalModalComponent } from 'src/app/lib/ui/components/view-goal-modal/view-goal-modal.component';
import { ViewActivityModalComponent } from 'src/app/lib/ui/components/view-activity-modal/view-activity-modal.component';
import { GoalHelperService } from 'src/app/services/feature-helpers/goal-helper.service';
import { HealthHelperService } from 'src/app/services/feature-helpers/health-helper.service';

@Component({
  selector: 'app-body',
  templateUrl: './my-body.page.html',
  styleUrls: ['./my-body.page.scss'],
})
export class MyBodyPage implements OnInit {
  filteredChallenges: UserChallenge[];
  currentActiveButtonIndex = -1;
  filterButtonActive = false;

  fitnessGoalGridInfo: GoalsGridContainer = {
    gridTitle: 'Fitness Goals',
    gridBackgroundColour: '#F65673',
    gridItemsPerCollumn: 3,
    showNavigation: true,
    gridGoals: [],
  };
  constructor(
    private dataService: DataService,
    private buttonHandler: ButtonHandlerService,
    private modalController: ModalController,
    public goalHelperService: GoalHelperService,
    public healthHandler: HealthHelperService
  ) {}

  excerciseActivities: ExcerciseLogEntry[] = [];

  BMIHealthStat: ImageButton = {
    buttonName: 'BMIHealthStat',
    backgroundColour: '#52A765',
    borderColour: 'white',
    buttonText: 'BMI Healthy',
    imageName: 'bmi.png',
  };

  excercisingFrequencyStat: ImageButton = {
    buttonName: 'excercisingFrequencyStat',
    backgroundColour: '#00A69C',
    borderColour: 'white',
    buttonText: 'Consistent',
    imageName: 'excercising.png',
  };

  logActivityButton: ImageRectangleButton = {
    buttonName: 'logActivityButton',
    buttonText: 'Log Activity',
    backgroundColour: '#F68F56',
    borderColour: 'white',
    imageName: 'activity.png',
    active: false,
  };

  addGoalButton: ImageRectangleButton = {
    buttonName: 'addGoalButton',
    buttonText: 'Add Goal',
    backgroundColour: '#F65673',
    borderColour: 'white',
    imageName: 'goal.png',
    active: false,
  };

  addMetricButton: ImageRectangleButton = {
    buttonName: 'addMetricButton',
    buttonText: 'Add Metric',
    backgroundColour: '#2BC685',
    borderColour: 'white',
    imageName: 'metric.png',
    active: false,
  };

  viewGuideButton: ImageRectangleButton = {
    buttonName: 'viewGuideButton',
    buttonText: 'Guide',
    backgroundColour: '#984FD1',
    borderColour: 'white',
    imageName: 'f-guides.png',
    active: false,
  };

  completedFilterButton: ImageRectangleButton = {
    buttonName: 'completedFilter',
    buttonText: 'Completed',
    backgroundColour: '#984FD1',
    borderColour: 'white',
    imageName: 'completed.png',
    active: false,
  };

  healthButtons: ImageRectangleButton[] = [
    this.logActivityButton,
    this.addGoalButton,
    this.addMetricButton,
    this.viewGuideButton,
  ];

  launchGoalModal(goalInfo: GoalInfo) {
    this.goalHelperService.launchGoalModal(goalInfo, (changed) => {
      if (changed) {
        this.getUserGoals();
      }
    });
  }

  launchAddGoalModal() {
    this.goalHelperService.launchAddGoalModal(true, (added) => {
      if (added) {
        this.getUserGoals();
      }
    });
  }

  getUserGoals() {
    this.goalHelperService.getUserGoals((goals: GoalInfo[]) => {
      if (goals) {
        const fitnessGoals = goals.filter(
          (g) => g.goalType === 'fitness' && g.goalStatus === 'in-progress'
        );
        this.fitnessGoalGridInfo.gridGoals = fitnessGoals;
      }
    });
  }

  launchViewActivityModal(logData: ExcerciseLogEntry) {
    this.healthHandler.launchViewActivityModal(logData, (edited) => {
      if (edited) {
        //
      }
    });
  }

  fetchUserActivities() {
    this.healthHandler.getUserActivities((activities) => {
      if (activities) {
        this.excerciseActivities = activities;
      }
    });
  }

  buttonClicked(buttonName: string) {
    console.log(buttonName);

    if (buttonName == 'addMetricButton') {
      this.launchAddMetricModal();
    }

    if (buttonName == 'logActivityButton') {
      this.launchLogActivitycModal();
    }
  }

  launchAddMetricModal() {
    this.healthHandler.launchAddMetricModal((added) => {
      if (added) {
        //
      }
    });
  }

  launchLogActivitycModal() {
    this.healthHandler.launchLogActivitycModal((added) => {
      if (added) {
        this.fetchUserActivities();
      }
    });
  }

  activityClicked(activityID: string) {
    console.log('Activity clicked: ' + activityID);
  }

  goalClicked(goaInfo: GoalInfo) {
    console.log('Goal clicked');
    console.log(goaInfo);
  }
  ngOnInit() {
    this.fetchUserActivities();
    this.getUserGoals();
    // this.filteredChallenges = this.dataService.userChallenges;
  }
}
