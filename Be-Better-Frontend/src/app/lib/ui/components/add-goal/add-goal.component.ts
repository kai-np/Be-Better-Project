import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoalInfo } from 'src/app/lib/data/models/goals/goalInfo';

import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';

@Component({
  selector: 'ui-add-goal-modal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss'],
})
export class AddGoalComponent implements OnInit {
 
  @Input() fitnessOnly : boolean; 
  addGoalButton: ImageButton = {
    imageName: 'add2.png',
    backgroundColour: '#4BAE4F',
    borderColour: 'white',
    buttonText: 'Add',
    buttonName: 'addGoal',
  };

  cancelButton: ImageButton = {
    imageName: 'cancel.png',
    backgroundColour: '#FF3F5B',
    borderColour: 'white',
    buttonText: 'Cancel',
    buttonName: 'cancelModal',
  };


  constructor(private modalController: ModalController) {}
  closeModal() {
    this.modalController.dismiss();
  }

  buttonClicked(buttonName: string, data?: any) {
    if (buttonName == 'cancelModal') {
      this.modalController.dismiss();
    }
    if (buttonName == 'addGoal') {
      this.modalController.dismiss(data);
    }
  }
  ngOnInit() {}
}
