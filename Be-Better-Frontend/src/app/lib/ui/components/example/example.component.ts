import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';

@Component({
  selector: 'ui-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class UIExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
