import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoalInfo } from 'src/app/lib/data/models/goals/goalInfo';

import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';

@Component({
  selector: 'ui-view-goal-modal',
  templateUrl: './view-goal-modal.component.html',
  styleUrls: ['./view-goal-modal.component.scss'],
})
export class ViewGoalModalComponent implements OnInit {
  @Input() goalInfo: GoalInfo;

  completeGoalButton: ImageButton = {
    imageName: 'tick.png',
    backgroundColour: '#4BAE4F',
    borderColour: 'white',
    buttonText: 'Mark Complete',
    buttonName: 'completeGoal',
  };

  deleteGoalButton: ImageButton = {
    imageName: 'cancel.png',
    backgroundColour: '#FF3F5B',
    borderColour: 'white',
    buttonText: 'Delete',
    buttonName: 'deleteGoal',
  };

  backButton: ImageButton = {
    imageName: 'chevron.png',
    backgroundColour: '#25B7D3',
    borderColour: 'white',
    buttonText: 'Back',
    buttonName: 'backButton',
  };

  displayDate: any;
  constructor(private modalController: ModalController) {}
  closeModal() {
    this.modalController.dismiss();
  }

  markCompleteButtonClicked() {
    console.log('Goal marked complete.');
  }

  convertIsoDateToString(isoDate) {
    const timestamp = parseInt(isoDate, 10);
    if (isNaN(timestamp)) {
      return 'Invalid timestamp';
    }

    const date = new Date(timestamp);
    const month = date.getMonth() + 1; // Months are zero-based, so we add 1
    const day = date.getDate();
    const year = date.getFullYear();

    // Format the date as 'M/D/YYYY'
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }

  buttonClicked(buttonName: string) {
    if (buttonName == 'deleteGoal') {
      const data = { action: 'delete', goalID: this.goalInfo.goalID };
      this.modalController.dismiss(data);
    }
    if (buttonName == 'completeGoal') {
      const data = { action: 'complete', goalInfo: this.goalInfo };
      this.modalController.dismiss(data);
    }
    if (buttonName == 'backButton') {
      this.closeModal();
    }
  }
  ngOnInit() {
    this.displayDate = this.convertIsoDateToString(this.goalInfo.dateAdded);
  }
}
