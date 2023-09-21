import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChallengeAction } from 'src/app/lib/data/models/challenges/challengeAction';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';

import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserAction } from 'src/app/lib/data/models/user/userAction';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';

@Component({
  selector: 'ui-view-challenge-modal',
  templateUrl: './view-challenge-modal.component.html',
  styleUrls: ['./view-challenge-modal.component.scss'],
})
export class ViewChallengeModalComponent implements OnInit {
  @Input() challengeInfo: UserChallenge;
  bgColour: string = '#46B6BD';
  imgName: string = '';
  markChallengeCompleteButton: ImageButton = {
    imageName: 'tick.png',
    backgroundColour: '#4BAE4F',
    borderColour: 'white',
    buttonText: 'Complete Challenge',
    buttonName: 'completeChallenge',
  };

  endChallengeButton: ImageButton = {
    imageName: 'cancel.png',
    backgroundColour: '#FF3F5B',
    borderColour: 'white',
    buttonText: 'End Challenge',
    buttonName: 'endChallenge',
  };

  shareChallengeButton: ImageButton = {
    imageName: 'share.png',
    backgroundColour: '#25B7D3',
    borderColour: 'white',
    buttonText: 'Challenge Friend',
    buttonName: 'shareChallenge',
  };

  displayDate: any;
  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }

  updateChallengeStyling() {
    const challengeType = this.challengeInfo.challengeType;

    if (challengeType == 'environmental') {
      this.bgColour = '#46B6BD';
      this.imgName = 'environment.png';
    }
    if (challengeType == 'societal') {
      this.bgColour = '#E18315';
      this.imgName = 'society.png';
    }
    if (challengeType == 'personal') {
      this.bgColour = '#BA3636';
      this.imgName = 'personal.png';
    }

    if (this.challengeInfo.sharedChallenge == true) {
      this.bgColour = '#984FD1';
      this.imgName = 'shared.png';
    }
    if (this.challengeInfo.challengeStatus == 'complete') {
      this.bgColour = '#387231';
      this.imgName = 'completed.png';
    }
  }

  buttonClicked(buttonName: string) {
    const challengeAction: ChallengeAction = {
      action: buttonName,
      challengeInfo: this.challengeInfo,
    };

    this.modalController.dismiss(challengeAction);
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

  ngOnInit() {
    this.updateChallengeStyling();
    this.displayDate = this.convertIsoDateToString(
      this.challengeInfo.startDate
    );
  }
}
