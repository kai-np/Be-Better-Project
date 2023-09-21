import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmallImageButton } from 'src/app/lib/data/models/ui/smallImageButton';

@Component({
  selector: 'ui-app-footer',
  templateUrl: './app-footer-nav-component.component.html',
  styleUrls: ['./app-footer-nav-component.component.scss'],
})
export class AppFooterComponent implements OnInit {
  constructor(private router: Router) {}

  buttonClicked(buttonName: string) {
    if (buttonName == 'dash') {
      this.router.navigate(['/dash']);
    }
    if (buttonName == 'challenges') {
      this.router.navigate(['/challenges']);
    }
    if (buttonName == 'learn') {
      this.router.navigate(['/learn']);
    }
  }
  ngOnInit() {}
}
