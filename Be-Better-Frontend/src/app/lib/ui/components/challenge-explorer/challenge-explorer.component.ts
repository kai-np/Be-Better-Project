import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChallengeTemplateInfo } from 'src/app/lib/data/models/challenges/challengeTemplateInfo';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';

@Component({
  selector: 'ui-challenge-explorer-modal',
  templateUrl: './challenge-explorer.component.html',
  styleUrls: ['./challenge-explorer.component.scss'],
})
export class ChallengeExplorerModalComponent implements OnInit {
  societyFilter: boolean = true;
  environmentFilter: boolean = false;
  personalFilter: boolean = false;
  selectedChallengeTemplate: ChallengeTemplateInfo = {
    challengeName: 'null',
    challengeRules: ['c'],
    challengeTemplateID: 'null',
    challengeType: 'society',
  };
  @Input() availableChallenges: ChallengeTemplateInfo[];

  visibleChallenges: ChallengeTemplateInfo[];

  challengeTemplateClicked(challengeTemplate: ChallengeTemplateInfo) {
    this.selectedChallengeTemplate = challengeTemplate;
  }
  filterChallenges(filterName: string) {
    this.visibleChallenges = this.availableChallenges.filter((c) => {
      if (c.challengeType == filterName) {
        return c;
      }
    });
  }

  filterButtonClicked(filterName: string) {
    if (filterName == 'society') {
      this.environmentFilter = false;
      this.personalFilter = false;
      this.societyFilter = true;
      this.filterChallenges('societal');
    }
    if (filterName == 'environmental') {
      this.environmentFilter = true;
      this.personalFilter = false;
      this.societyFilter = false;
      this.filterChallenges('environmental');
    }
    if (filterName == 'personal') {
      this.environmentFilter = false;
      this.personalFilter = true;
      this.societyFilter = false;
      this.filterChallenges('personal');
    }
  }
  startChallengeButton: ImageButton = {
    imageName: 'tick.png',
    backgroundColour: '#4BAE4F',
    borderColour: 'white',
    buttonText: 'Start Challenge',
    buttonName: 'startChallenge',
  };

  cancelButton: ImageButton = {
    imageName: 'cancel.png',
    backgroundColour: '#FF3F5B',
    borderColour: 'white',
    buttonText: 'Cancel',
    buttonName: 'cancel',
  };

  randomChallengeButton: ImageButton = {
    imageName: 'random2.png',
    backgroundColour: '#25B7D3',
    borderColour: 'white',
    buttonText: 'Random',
    buttonName: 'randomChallenge',
  };
  constructor(private modalController: ModalController) {
    console.log('avao;');
  }

  closeModal() {
    this.modalController.dismiss();
  }

  buttonClicked(buttonName: string) {
    if (buttonName == 'startChallenge') {
      if (this.selectedChallengeTemplate.challengeName != 'null') {
        const data = {
          action: 'startChallenge',
          data: this.selectedChallengeTemplate,
        };
        this.modalController.dismiss(data);
      }
    }

    if (buttonName == 'randomChallenge') {
      const data = { action: 'randomChallenge', data: null };
      this.modalController.dismiss(data);
    }
  }
  ngOnInit() {
    console.log(this.availableChallenges);

    this.filterChallenges('society');
  }
}
