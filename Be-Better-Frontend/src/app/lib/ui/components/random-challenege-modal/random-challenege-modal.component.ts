import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';


@Component({
  selector: 'ui-random-challenege-modal',
  templateUrl: './random-challenege-modal.component.html',
  styleUrls: ['./random-challenege-modal.component.scss'],
})
export class RandomChallengeModalComponent implements OnInit {


 

  startButton: ImageButton = {
    imageName: 'tick.png',
    backgroundColour: '#18c499',
    borderColour: 'white',
    buttonText: 'Get Challenge',
    buttonName: 'closeModal',
  };

 
  constructor(private modalController: ModalController) {}
  closeModal() {
    this.modalController.dismiss(false);
  }

  startRandomChallenge() {
      this.modalController.dismiss(true);
    
   
  }
  ngOnInit() {

  }
}
