import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      var firebaseConfig = {
        apiKey: "AIzaSyC_5zmIHmuhVsnOTLkLo87F2vp7IiF3qpA",
        authDomain: "photo-csd203.firebaseapp.com",
        databaseURL: "https://photo-csd203.firebaseio.com",
        projectId: "photo-csd203",
        storageBucket: "photo-csd203.appspot.com",
        messagingSenderId: "782700580184",
        appId: "1:782700580184:web:ade6fba307be1b8c66292d",
        measurementId: "G-DD9K56TE7Q"
        }
        firebase.initializeApp(firebaseConfig);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
