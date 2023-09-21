import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { DataService } from '../../../services/data/data.service';
import { ScrollButton } from 'src/app/lib/data/models/ui/scrollButton';
import { learnEntry } from 'src/app/lib/data/models/core/learnEntry';
import { LearnContentModalComponent } from 'src/app/lib/ui/components/learn-content-modal/learn-content-modal.component';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit, AfterViewInit {

  @ViewChild('scrollBg') scrollImageElement!: ElementRef;

  renderedWidth = 0;
  renderedHeight = 0;

  constructor(
    private dataService: DataService,
    private modalController: ModalController
  ) {}

  scrollButtons : ScrollButton[] = [{
    imageName: "sad.png",
    backgroundColour: "#FC60BD",
    borderColour: "white",
    buttonName: "depression",
    posTop: "538px",
    posLeft: "117px",
    posX: 4,
    posY: 76
  },
  {
    imageName: "kind.png",
    backgroundColour: "#B760FC",
    borderColour: "white",
    buttonName: "bekind",
    posTop: "538px",
    posLeft: "117px",
    posX: 20,
    posY: 20
  },
  {
    imageName: "anxiety.png",
    backgroundColour: "#00BFA6",
    borderColour: "white",
    buttonName: "anxiety",
    posTop: "538px",
    posLeft: "117px",
    posX: 20,
    posY: 74
  },
  {
    imageName: "drugs.png",
    backgroundColour: "#FC6060",
    borderColour: "white",
    buttonName: "addiction",
    posTop: "538px",
    posLeft: "117px",
    posX: 43,
    posY: 67
  },
  {
    imageName: "eat.png",
    backgroundColour: "#FFAC4B",
    borderColour: "white",
    buttonName: "eating",
    posTop: "538px",
    posLeft: "117px",
    posX: 75,
    posY: 68
  },
  {
    imageName: "bipolar.png",
    backgroundColour: "#608BFC",
    borderColour: "white",
    buttonName: "bipolar",
    posTop: "538px",
    posLeft: "117px",
    posX: 91,
    posY: 55
  }]

  ngAfterViewInit() {
    this.calculatePositions();
    //this.getImageSize();
  }

  calculatePositions() {
    if (this.scrollImageElement.nativeElement) {
      const img = this.scrollImageElement.nativeElement;
      this.renderedWidth = img.offsetWidth;
      this.renderedHeight = img.offsetHeight;
      console.log("done");
      console.log(img.offsetWidth)
      this.calculateAbsoluteValuesForButtons();

    }
  }

calculateAbsoluteValuesForButtons() {
  this.scrollButtons.forEach((button) => {
    const posX = this.renderedWidth * (button.posX/100);
    const posY = this.renderedHeight * (button.posY/100);
    button.posLeft = posX.toString() + "px";
    button.posTop = posY.toString() + "px";
  })
}


  ngOnInit() {
  // this.calculatePositions()
  }

  buttonClicked(buttonName: string) {
    //this.getImageSize()
    //
    console.log(buttonName);
    console.log(this.renderedHeight);
    console.log(this.renderedWidth);
    this.launchViewLearnEntryModal(buttonName);
  }

  
  async launchViewLearnEntryModal(entryName: string) {
    const entryData: learnEntry = this.dataService.getLearnContentEntry(entryName);
    const modal = await this.modalController.create({
      component: LearnContentModalComponent,
      componentProps: {
        id: 'app-modal',
        paramID: 123,
        cssClass: 'main',
        paramTitle: '',
        learnContentEntry: entryData,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data != undefined) {
        //this.userHandler.updateUserProfile(dataReturned.data);
      }
    });

    return await modal.present();
  }

 
}
