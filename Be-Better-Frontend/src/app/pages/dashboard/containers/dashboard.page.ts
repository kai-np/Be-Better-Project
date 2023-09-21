import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';
import { Test } from 'src/app/lib/data/models/test';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { DataService } from '../../../services/data/data.service';
import { ButtonHandlerService } from 'src/app/services/buttonHandler/buttonHandler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  testItem: Test = { name: 'ddd', number: 9 };

  shelfButtons: ButtonShelfInfo[];
  constructor(
    private dataService: DataService,
    private buttonHandler: ButtonHandlerService
  ) {
    this.shelfButtons = dataService.shelfButtons;
  }

  ngOnInit() {}

  shelfButtonClicked(buttonCategory: string, buttonName: string) {
    this.buttonHandler.handleButtonClick(buttonCategory, buttonName);
    console.log('Button click:');
    console.log(buttonName + '/ ' + buttonCategory);
  }
}
