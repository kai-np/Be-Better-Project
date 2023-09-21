import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GoalInfo } from 'src/app/lib/data/models/goals/goalInfo';

import { GoalsGridContainer } from 'src/app/lib/data/models/ui/goalsGrid';

@Component({
  selector: 'ui-goals-grid-container',
  templateUrl: './goals-grid-container.component.html',
  styleUrls: ['./goals-grid-container.component.scss'],
})
export class GoalsGridContainerComponent implements OnInit {
  @Input() gridData: GoalsGridContainer;
  @Input() hideExtras: boolean = false;

  @Output() goalClicked = new EventEmitter();

  constructor() {}

  goalClickedEmit(goal: GoalInfo) {
    this.goalClicked.emit(goal);
    //  this.buttonClicked.emit(this.activityInfo.excerciseLogID);
  }

  updateGridStyling() {}

  ngOnInit() {
    this.updateGridStyling();
  }
}
