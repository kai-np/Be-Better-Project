import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
//import { register } from 'swiper/element/bundle';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }
  // register();
  // Initialize app
  initializeApp() {
    // Wait until platform is ready
    this.platform.ready().then(async () => {
      if (Capacitor.getPlatform() !== 'web') {
      }

      setTimeout(async () => {
        // Hide SplashScreen
        await SplashScreen.hide();
      }, 2000);
    });
  }
}
