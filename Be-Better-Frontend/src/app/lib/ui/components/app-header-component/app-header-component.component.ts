import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';
import { AuthHandlerService } from 'src/app/services/api-handlers/auth/authHandler';

@Component({
  selector: 'ui-app-header',
  templateUrl: './app-header-component.component.html',
  styleUrls: ['./app-header-component.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor(
    private authHandler: AuthHandlerService,
    private router: Router
  ) {}

  userName: string = '';
  profileButton: SmallImageButton = {
    link: '/profile',
    imageName: 'user-profile.png',
    backgroundColour: '#4EB89E',
    borderColour: 'white',
  };

  settingsButton: SmallImageButton = {
    link: '/settings',
    imageName: 'settings.png',
    backgroundColour: '#4EB89E',
    borderColour: 'white',
  };
  ngOnInit() {
    this.getName();
  }

  getName() {
    this.authHandler.getUserInfo((userInfo: UserInfo) => {
      if (userInfo == undefined) {
        this.router.navigate(['/auth/register']);
      } else {
        this.userName = userInfo.name;
      }
    });
  }
}
