import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ImageRectangleButton } from 'src/app/lib/data/models/ui/imageRectangleButton';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-challenge-basic-list-item',
  templateUrl: './challenge-basic-list-item.component.html',
  styleUrls: ['./challenge-basic-list-item.component.scss'],
})
export class ChallengeBasicListItemComponent implements OnInit {
  @Input() challengeInfo: UserChallenge;

  @Output() buttonClicked = new EventEmitter();

  bgColour: string = '#46B6BD';
  imgName: string = '';
  constructor() {}

  buttonClickedEmit() {
    this.buttonClicked.emit(this.challengeInfo.challengeID);
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

  ngOnInit() {
    this.updateChallengeStyling();
  }
}
