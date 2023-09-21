import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';
import { Test } from 'src/app/lib/data/models/test';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { DataService } from '../../../services/data/data.service';
import { ButtonHandlerService } from 'src/app/services/buttonHandler/buttonHandler.service';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';
import { ViewChallengeModalComponent } from 'src/app/lib/ui/components/view-challenge-modal/view-challenge-modal.component';
import { ChallengeExplorerModalComponent } from 'src/app/lib/ui/components/challenge-explorer/challenge-explorer.component';
import { ChallengeTemplateInfo } from 'src/app/lib/data/models/challenges/challengeTemplateInfo';
import { ChallengeHandlerService } from 'src/app/services/api-handlers/challenges/challengeHandler.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {
  filteredChallenges: UserChallenge[];
  currentActiveButtonIndex = -1;
  filterButtonActive = false;
  availableChallenges: ChallengeTemplateInfo[];
  userChallenges: UserChallenge[];
  constructor(
    private dataService: DataService,
    private buttonHandler: ButtonHandlerService,
    private modalController: ModalController,
    public challengeHandler: ChallengeHandlerService
  ) {
    console.log('Got challenges');
  }

  challengeExplorerButton: ImageButton = {
    buttonName: 'challengeExplorer',
    backgroundColour: '#C724B6',
    borderColour: 'white',
    buttonText: 'Explore Challenges',
    imageName: 'explore-challenges.png',
  };

  randomChallengeButton: ImageButton = {
    buttonName: 'randomChallenge',
    backgroundColour: '#3857C6',
    borderColour: 'white',
    buttonText: 'Random Challenge',
    imageName: 'random.png',
  };

  societalFilterButton: ImageRectangleButton = {
    buttonName: 'societyFilter',
    buttonText: 'Societal',
    backgroundColour: '#E18315',
    borderColour: 'white',
    imageName: 'society.png',
    active: false,
  };

  environmentalFilterButton: ImageRectangleButton = {
    buttonName: 'environmentFilter',
    buttonText: 'Environmental',
    backgroundColour: '#46B6BD',
    borderColour: 'white',
    imageName: 'environment.png',
    active: false,
  };

  personalFilterButton: ImageRectangleButton = {
    buttonName: 'personalFilter',
    buttonText: 'Personal',
    backgroundColour: '#BA3636',
    borderColour: 'white',
    imageName: 'personal.png',
    active: false,
  };

  sharedFilterButton: ImageRectangleButton = {
    buttonName: 'sharedFilter',
    buttonText: 'Shared',
    backgroundColour: '#984FD1',
    borderColour: 'white',
    imageName: 'shared.png',
    active: false,
  };

  completedFilterButton: ImageRectangleButton = {
    buttonName: 'completedFilter',
    buttonText: 'Completed',
    backgroundColour: '#387231',
    borderColour: 'white',
    imageName: 'completed.png',
    active: false,
  };

  filterButtons: ImageRectangleButton[] = [
    this.societalFilterButton,
    this.environmentalFilterButton,
    this.personalFilterButton,
    this.sharedFilterButton,
    this.completedFilterButton,
  ];

  filterChallenges(filterName: string) {
    if (filterName == 'societyFilter') {
      this.filteredChallenges = this.userChallenges.filter((c) => {
        if (
          c.challengeType === 'societal' &&
          c.sharedChallenge != true &&
          c.challengeStatus != 'complete'
        ) {
          return c;
        }
      });
    }

    if (filterName == 'environmentFilter') {
      this.filteredChallenges = this.userChallenges.filter((c) => {
        if (
          c.challengeType === 'environmental' &&
          c.sharedChallenge != true &&
          c.challengeStatus != 'complete'
        ) {
          return c;
        }
      });
    }

    if (filterName == 'personalFilter') {
      this.filteredChallenges = this.userChallenges.filter((c) => {
        if (
          c.challengeType === 'personal' &&
          c.sharedChallenge != true &&
          c.challengeStatus != 'complete'
        ) {
          return c;
        }
      });
    }

    if (filterName == 'completedFilter') {
      this.filteredChallenges = this.userChallenges.filter((c) => {
        if (c.challengeStatus == 'complete') {
          return c;
        }
      });
    }

    if (filterName == 'sharedFilter') {
      this.filteredChallenges = this.userChallenges.filter((c) => {
        if (c.sharedChallenge == true && c.challengeStatus != 'complete') {
          return c;
        }
      });
    }

    if (filterName == 'all') {
      this.filteredChallenges = this.userChallenges;
    }
  }

  launchChallengeViewer(challenegeInfo: UserChallenge) {
    this.challengeHandler.launchViewChallengeModal(
      challenegeInfo,
      (challengeCompleted) => {
        if (challengeCompleted) {
          this.fetchChallenges();
        }
      }
    );
  }

  launchChallengeExplorer() {
    this.challengeHandler.launchChallengeExplorerModal((challengeStarted) => {
      if (challengeStarted) {
        this.fetchChallenges();
      }
    });
  }

  filterButtonClicked(buttonName: string) {
    for (let x = 0; x < this.filterButtons.length; x++) {
      if (buttonName == this.filterButtons[x].buttonName) {
        if (
          x != this.currentActiveButtonIndex &&
          this.currentActiveButtonIndex != -1
        ) {
          this.filterButtons[x].active = true;
          this.filterButtons[this.currentActiveButtonIndex].active = false;

          this.filterChallenges(this.filterButtons[x].buttonName);
          this.currentActiveButtonIndex = x;
          this.filterButtonActive = true;
          break;
        }
        if (-1 == this.currentActiveButtonIndex) {
          this.filterButtons[x].active = true;
          this.filterChallenges(this.filterButtons[x].buttonName);
          this.currentActiveButtonIndex = x;
          this.filterButtonActive = true;
          break;
        }

        // Deslect already active button

        if (this.currentActiveButtonIndex == x) {
          if (this.filterButtonActive == true) {
            this.filterButtons[x].active = !this.filterButtons[x].active;
            this.filterChallenges('all');
            this.filterButtonActive = false;
          } else if (this.filterButtonActive == false) {
            this.filterButtons[x].active = true;
            this.filterChallenges(this.filterButtons[x].buttonName);

            this.filterButtonActive = true;
          }
        }
      }
    }
  }
  ngOnInit() {
    this.fetchChallenges();
  }

  fetchChallenges() {
    this.challengeHandler.fetchUserChallenges((challenges) => {
      this.userChallenges = challenges;
      this.filteredChallenges = this.userChallenges;
      // this.availableChallenges = this.dataService.challengeTemplates;
      console.log('sss');
      console.log(this.availableChallenges);
    });
  }
  getChallenge(challengeID: string) {
    for (let c of this.userChallenges) {
      if (c.challengeID == challengeID) {
        return c;
      }
    }
  }
}
