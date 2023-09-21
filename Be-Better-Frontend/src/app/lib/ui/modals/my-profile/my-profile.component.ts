import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';

@Component({
  selector: 'ui-my-profile-modal',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  @Input() userInfo: UserInfo;

  saveButton: ImageButton = {
    imageName: 'save.png',
    backgroundColour: '#4BAE4F',
    borderColour: 'white',
    buttonText: 'Save Profile',
    buttonName: 'saveProfile',
  };

  cancelButton: ImageButton = {
    imageName: 'cancel.png',
    backgroundColour: '#FF3F5B',
    borderColour: 'white',
    buttonText: 'Cancel',
    buttonName: 'cancelModal',
  };

  appSettingsButton: ImageButton = {
    imageName: 'settings.png',
    backgroundColour: '#25B7D3',
    borderColour: 'white',
    buttonText: 'Settings',
    buttonName: 'appSettings',
  };
  constructor(private modalController: ModalController) {}
  closeModal() {
    this.modalController.dismiss();
  }

  buttonClicked(buttonName: string, data?: UserInfo) {
    if (buttonName == 'cancelModal') {
      this.modalController.dismiss();
    }
    if (buttonName == 'saveProfile') {
      this.modalController.dismiss(data);
    }
  }
  ngOnInit() {}
}
