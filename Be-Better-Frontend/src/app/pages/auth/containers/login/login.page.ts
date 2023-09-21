import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginUserInfo } from 'src/app/lib/data/models/core/loginUserInfo';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { AuthHandlerService } from 'src/app/services/api-handlers/auth/authHandler';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    private authHandler: AuthHandlerService
  ) {}

  loginButtonClicked(loginInfo: loginUserInfo) {
    console.log(loginInfo);
    this.authHandler.secureLogin(loginInfo, (result) => {
      if (result == false) {
        console.log('FAILED');
      } else {
        this.router.navigate(['/welcome']);
        console.log('LOGIN SUCCESS');
      }
    });
  }
  ngOnInit() {}
}
