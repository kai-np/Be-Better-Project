import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerUserInfo } from 'src/app/lib/data/models/core/registerUserInfo';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { AuthHandlerService } from 'src/app/services/api-handlers/auth/authHandler';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
    private router: Router,
    private authHandler: AuthHandlerService
  ) {}

  registerButtonClicked(registerInfo: registerUserInfo) {
    console.log(registerInfo);
    this.authHandler.registerUser(registerInfo, (result) => {
      if (result == true) {
        console.log('User Registered');
        this.router.navigate(['/auth/login']);
      } else {
        console.log('User registration failed');
      }
    });
  }
  ngOnInit() {}
}
