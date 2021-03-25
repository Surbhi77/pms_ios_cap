import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private storage:Storage,
    private router:Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get("isLoggedIn").then(res => {
        if(res){
          //this.statusBar.styleDefault();
          this.statusBar.styleDefault();
          this.splashScreen.hide();
          this.router.navigateByUrl('/dashboard');
          return;
        }else{
          //this.statusBar.styleDefault();
         // alert("error 2")
         this.statusBar.styleDefault();
          this.splashScreen.hide();
          this.router.navigateByUrl('/login');
          return;
        }
      }, err =>{
        //this.statusBar.styleDefault();
       // alert("error")
        this.splashScreen.hide();
        this.router.navigateByUrl('/login');
        return;
      }); 
    });
  }
}
