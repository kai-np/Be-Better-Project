import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';

@Component({
  selector: 'ui-add-metric-modal',
  templateUrl: './add-metric-modal.component.html',
  styleUrls: ['./add-metric-modal.component.scss'],
})
export class AddMetricModalComponent implements OnInit {
  @Input() userInfo: UserInfo;

  saveButton: ImageButton = {
    imageName: 'save.png',
    backgroundColour: '#4BAE4F',
    borderColour: 'white',
    buttonText: 'Save Profile',
    buttonName: 'saveMetric',
  };

  cancelButton: ImageButton = {
    imageName: 'cancel.png',
    backgroundColour: '#FF3F5B',
    borderColour: 'white',
    buttonText: 'Cancel',
    buttonName: 'cancelModal',
  };

  learnMoreButton: ImageButton = {
    imageName: 'settings.png',
    backgroundColour: '#25B7D3',
    borderColour: 'white',
    buttonText: 'Settings',
    buttonName: 'learnMore',
  };
  constructor(private modalController: ModalController) {}
  closeModal() {
    this.modalController.dismiss();
  }

  buttonClicked(buttonName: string, data?: any) {
    if (buttonName == 'cancelModal') {
      this.modalController.dismiss();
    }
    if (buttonName == 'saveMetric') {
      this.modalController.dismiss(data);
    }
  }
  ngOnInit() {}
}
