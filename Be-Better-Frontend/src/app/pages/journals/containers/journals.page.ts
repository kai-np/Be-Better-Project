import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.page.html',
  styleUrls: ['./journals.page.scss'],
})
export class JournalsPage implements OnInit {
  constructor(private router: Router) {}

  gratitudeJournalButton: ImageButton = {
    buttonName: 'gratJournal',
    imageName: 'gratitude.png',
    backgroundColour: '#387231',
    borderColour: 'white',
    buttonText: 'Gratitude Journal',
    link: '/journals/gratitude',
  };

  personalJournalButton: ImageButton = {
    buttonName: 'personalJournal',
    imageName: 'personal.png',
    backgroundColour: '#3A8D93',
    borderColour: 'white',
    buttonText: 'Personal Journal',
    link: '/journals/personal',
  };

  publicJournalButton: ImageButton = {
    buttonName: 'publicJournal',
    imageName: 'public.png',
    backgroundColour: '#E18315',
    borderColour: 'white',
    buttonText: 'Public Journal',
    link: '/journals/public',
  };

  buttonClicked(buttonName: string) {
    console.log(buttonName);
    if (buttonName == 'gratJournal') {
      this.router.navigate(['/journals/gratitude']);
    }
    if (buttonName == 'personalJournal') {
      this.router.navigate(['/journals/personal']);
    }
    if (buttonName == 'publicJournal') {
      this.router.navigate(['/journals/public']);
    }
  }
  ngOnInit() {}
}
