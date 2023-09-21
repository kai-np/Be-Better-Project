import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';
import { ExcerciseLogEntry } from 'src/app/lib/data/models/physcial/excerciseLogEntry';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-activity-basic-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss'],
})
export class ActivityListItemComponent implements OnInit {
  @Input() activityInfo: ExcerciseLogEntry;

  @Output() buttonClicked = new EventEmitter();

  displayDate: any;
  bgColour: string = '#46B6BD';
  imgName: string = '';
  constructor() {}

  buttonClickedEmit() {
    this.buttonClicked.emit(this.activityInfo.excerciseLogID);
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

  updateActivityStyling() {
    const aType = this.activityInfo.excerciseType;

    switch (aType) {
      case 'cycle':
        this.imgName = 'bike.png';
        break;
      case 'gym':
        this.imgName = 'dumbbells.png';
        break;
      case 'hike':
        this.imgName = 'hiking.png';
        break;
      case 'run':
        this.imgName = 'running.png';
        break;
      case 'other':
        this.imgName = 'trampoline.png';
        break;
      case 'yoga':
        this.imgName = 'yoga-mat.png';
        break;
    }
  }

  ngOnInit() {
    this.updateActivityStyling();

    this.displayDate = this.convertIsoDateToString(this.activityInfo.dateAdded);
  }
}
