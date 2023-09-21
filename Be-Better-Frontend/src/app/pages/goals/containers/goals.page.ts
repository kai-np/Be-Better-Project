import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { GoalInfo } from 'src/app/lib/data/models/goals/goalInfo';
import { GoalsGridContainer } from 'src/app/lib/data/models/ui/goalsGrid';
import { AddGoalComponent } from 'src/app/lib/ui/components/add-goal/add-goal.component';
import { ViewGoalModalComponent } from 'src/app/lib/ui/components/view-goal-modal/view-goal-modal.component';
import { GeneratorService } from 'src/app/services/feature-helpers/generator.service';
import { GoalHelperService } from 'src/app/services/feature-helpers/goal-helper.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {
  showCompleted = false;
  constructor(
    private dataService: DataService,
    private modalController: ModalController,
    private goalGenerator: GeneratorService,
    public goalHelperService: GoalHelperService
  ) {}
  completeGoals: GoalInfo[];
  defaultGoals: GoalInfo[];
  longTermGoals: GoalInfo[];
  fitnessGoals: GoalInfo[];
  shortTermGoals: GoalInfo[];

  fitnessGoalGridInfo: GoalsGridContainer = {
    gridTitle: 'Fitness Goals',
    gridBackgroundColour: '#F65673',
    gridItemsPerCollumn: 3,
    showNavigation: true,
    gridGoals: [],
  };

  defaultGoalGridInfo: GoalsGridContainer = {
    gridTitle: 'Standard Goals',
    gridBackgroundColour: '#F65673',
    gridItemsPerCollumn: 3,
    showNavigation: true,
    gridGoals: [],
  };

  shortTermGoalGridInfo: GoalsGridContainer = {
    gridTitle: 'Short Term Goals',
    gridBackgroundColour: '#F65673',
    gridItemsPerCollumn: 3,
    showNavigation: true,
    gridGoals: [],
  };

  completeGoalGridInfo: GoalsGridContainer = {
    gridTitle: 'Completed Goals',
    gridBackgroundColour: '#F65673',
    gridItemsPerCollumn: 3,
    showNavigation: true,
    gridGoals: [],
  };

  longTermGoalGridInfo: GoalsGridContainer = {
    gridTitle: 'Long Term Goals',
    gridBackgroundColour: '#F65673',
    gridItemsPerCollumn: 3,
    showNavigation: true,
    gridGoals: [],
  };

  ngOnInit() {
    this.fetchUserGoals();
  }

  fetchUserGoals() {
    const userGoals = this.goalHelperService.getUserGoals((userGoals) => {
      if (userGoals != false) {
        this.filterGoals(userGoals);
      }
    });
  }

  viewGoalModal(goalInfo: GoalInfo) {
    this.goalHelperService.launchGoalModal(goalInfo, (actionTaken) => {
      if (actionTaken) {
        this.fetchUserGoals();
      }
    });
  }

  toggleShowCompleted() {
    this.showCompleted = !this.showCompleted;
  }
  filterGoals(goalData) {
    const filterdGoals = this.goalHelperService.filterGoalArray(goalData);
    this.completeGoals = filterdGoals.completeGoals;
    this.defaultGoals = filterdGoals.defaultGoals;
    this.longTermGoals = filterdGoals.longTermGoals;
    this.fitnessGoals = filterdGoals.fitnessGoals;
    this.shortTermGoals = filterdGoals.shortTermGoals;

    this.fitnessGoalGridInfo.gridGoals = this.fitnessGoals;
    this.defaultGoalGridInfo.gridGoals = this.defaultGoals;
    this.completeGoalGridInfo.gridGoals = this.completeGoals;
    this.shortTermGoalGridInfo.gridGoals = this.shortTermGoals;
    this.longTermGoalGridInfo.gridGoals = this.longTermGoals;
  }

  buttonClicked(buttonName: string) {
    console.log('button clicked =>');
    console.log(buttonName);

    //
  }

  addGoalButtonClicked() {
    this.goalHelperService.launchAddGoalModal(false, (added) => {
      if (added) {
        this.fetchUserGoals();
      }
    });
  }

  addGoalButton: ImageRectangleButton = {
    buttonName: 'addGoalButton',
    buttonText: 'Add Goal',
    backgroundColour: '#A1225F',
    borderColour: 'white',
    imageName: 'target.png',
    active: false,
  };

  viewCompletedGoals: ImageRectangleButton = {
    buttonName: 'viewCompletedGoalsButton',
    buttonText: 'Completed',
    backgroundColour: '#1B890E',
    borderColour: 'white',
    imageName: 'trophy.png',
    active: false,
  };
}
