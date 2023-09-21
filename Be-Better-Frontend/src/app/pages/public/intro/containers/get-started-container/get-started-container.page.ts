import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'get-started-container',
  templateUrl: './get-started-container.page.html',
  styleUrls: ['./get-started-container.page.scss'],
})
export class GetStartedContainer implements OnInit {
  constructor() {}

  ngOnInit() {}
}
