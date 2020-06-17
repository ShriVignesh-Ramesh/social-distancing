import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';
import { interval } from 'rxjs';
import { AppService } from './app.service';
import { Model } from './app.modal';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  allringtones:any[];
  lat : string = '';
  long : string = '';
  deviceId: string = '';
  objData : Model;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private backgroundGeolocation: BackgroundGeolocation,
    private ringtones: NativeRingtones,
    private appservice : AppService,
    private backgroundMode: BackgroundMode,
    private localNotifications: LocalNotifications
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.backgroundMode.enable();
    interval(5000).subscribe(x => {
      const deviceId = localStorage.getItem("deviceId");
      const latVal = localStorage.getItem("lat");
      const longVal = localStorage.getItem("long");
      const riskVal = localStorage.getItem("risk")
      const protection = localStorage.getItem("safeClick");
      this.objData = new Model();
      if(deviceId){
        if(latVal && longVal && riskVal && protection){
          this.objData.userId = deviceId;
          this.objData.lat = parseFloat(latVal);
          this.objData.lng = parseFloat(longVal);
          this.objData.riskFactor = riskVal;
          this.objData.alertType = protection;
          this.appservice.postData(this.objData);
          this.appservice.sendPostRequest(this.objData).subscribe(
            res => {
              console.log(res);
              if(res){
                this.ringtones.playRingtone(this.allringtones[1].Url);
                if(riskVal == "ALL"){
                  this.simpleNotif();
                }else{
                  this.simpleNotif2();
                }
                
              }
            }
      );
        //   return this.appservice.postData(this.objData).subscribe(
        //     data => {
        //       console.log(data);
        //     },
        //     error => {
        //         console.log(error);
        //     }
        // );
          
        }
      }
      
  });
    this.ringtones.getRingtone().then((ringtones) => { 
      this.allringtones = ringtones;
      console.log(ringtones); });

    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 5,
      stationaryRadius: 10,
      distanceFilter: 10,
      interval: 2000,
      debug: false, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };
    this.backgroundGeolocation.configure(config)
      .then(() => {
        this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
          this.lat = JSON.stringify(location.latitude);
          localStorage.setItem("lat",this.lat);
          this.long = JSON.stringify(location.longitude);
          localStorage.setItem("long",this.long);
          //this.ringtones.playRingtone(this.allringtones[14].Url);
          // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
          // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
          // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
          this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });
      });

    // start recording location
    this.backgroundGeolocation.start();
  }
  simpleNotif() {
    this.localNotifications.schedule({
      id: 1,
      text: 'Kindly Follow Social Distancing',
      data: { secret: 'secret' }
    });
  }
  simpleNotif2() {
    this.localNotifications.schedule({
      id: 2,
      text: 'You Have an HIGH risk user near you',
      data: { secret: 'secret' }
    });
  }
}
