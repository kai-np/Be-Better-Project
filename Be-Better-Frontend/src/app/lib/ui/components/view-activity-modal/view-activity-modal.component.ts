import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExcerciseLogEntry } from 'src/app/lib/data/models/physcial/excerciseLogEntry';

import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';

@Component({
  selector: 'ui-view-activity-modal',
  templateUrl: './view-activity-modal.component.html',
  styleUrls: ['./view-activity-modal.component.scss'],
})
export class ViewActivityModalComponent implements OnInit {
  displayDate: any;

  @Input() activityInfo: ExcerciseLogEntry;

  closeButton: ImageButton = {
    imageName: 'cancel.png',
    backgroundColour: '#FF3F5B',
    borderColour: 'white',
    buttonText: 'Cancel',
    buttonName: 'closeModal',
  };

  constructor(private modalController: ModalController) {}
  closeModal() {
    this.modalController.dismiss();
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
  buttonClicked(buttonName: string, data?: any) {
    if (buttonName == 'closeModal') {
      this.modalController.dismiss();
    }
  }
  ngOnInit() {
    this.displayDate = this.convertIsoDateToString(this.activityInfo.dateAdded);
  }
}
