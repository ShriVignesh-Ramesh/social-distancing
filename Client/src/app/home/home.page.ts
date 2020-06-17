import { Component } from '@angular/core';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private uniqueDeviceID: UniqueDeviceID,
    private geolocation: Geolocation,
    private router: Router) { }
  ngOnInit() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => localStorage.setItem("deviceId", uuid))
      .catch((error: any) => console.log(error));
    this.geolocation.getCurrentPosition().then((resp) => {
      localStorage.setItem("lat", JSON.stringify(resp.coords.latitude));
      localStorage.setItem("long", JSON.stringify(resp.coords.longitude));
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      localStorage.setItem("lat", JSON.stringify(data.coords.latitude))
      localStorage.setItem("long", JSON.stringify(data.coords.longitude))
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
    const deviceId = localStorage.getItem("deviceId");
      const latVal = localStorage.getItem("lat");
      const longVal = localStorage.getItem("long");
      const riskVal = localStorage.getItem("risk")
      const protection = localStorage.getItem("safeClick");
      if(deviceId){
        if(latVal && longVal && riskVal && protection){
          this.router.navigateByUrl("/result");
        }
      }
  }
  gotoUserName() {
    this.router.navigateByUrl("/user-name");
  }

}
