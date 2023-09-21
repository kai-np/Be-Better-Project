import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';
import { AuthHandlerService } from 'src/app/services/api-handlers/auth/authHandler';

@Component({
  selector: 'ui-page-header',
  templateUrl: './page-header-component.component.html',
  styleUrls: ['./page-header-component.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @Input() pageName: string;
  @Input() pageColour: string;
  constructor(
    private authHandler: AuthHandlerService,
    private router: Router
  ) {}

  ngOnInit() {}

  verifyAuth() {
    this.authHandler.getUserInfo((userInfo: UserInfo) => {
      if (userInfo == undefined) {
        this.router.navigate(['/auth/register']);
      }
    });
  }
}
