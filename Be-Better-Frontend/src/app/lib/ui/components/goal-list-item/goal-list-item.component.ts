import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GoalInfo } from 'src/app/lib/data/models/goals/goalInfo';

@Component({
  selector: 'ui-goal-list-item',
  templateUrl: './goal-list-item.component.html',
  styleUrls: ['./goal-list-item.component.scss'],
})
export class GoalListItemComponent implements OnInit {
  @Input() goalInfo: GoalInfo;

  @Output() goalClicked = new EventEmitter();

  statusColour: string = '';

  constructor() {}

  buttonClickedEmit() {
    this.goalClicked.emit(this.goalInfo);
    //  this.buttonClicked.emit(this.activityInfo.excerciseLogID);
  }

  updateGoalStyling() {
    if (this.goalInfo.goalStatus == 'complete') {
      this.statusColour = '#398730';
    }
    if (this.goalInfo.goalStatus == 'incomplete') {
      this.statusColour = '#D21B1B';
    }
  }

  ngOnInit() {
    this.updateGoalStyling();
  }
}
