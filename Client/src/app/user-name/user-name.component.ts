import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss'],
})
export class UserNameComponent implements OnInit {
 name: string ='';
  constructor(private router: Router,public toastController: ToastController) { }

  ngOnInit() {
    if(localStorage.getItem("name")){
      this.name = localStorage.getItem("name");
    }
    
  }

  safeClick(){
    localStorage.setItem("safeClick","ALL");
    if(this.name != ''){
      localStorage.setItem("name", this.name);
      this.router.navigateByUrl("/survey");
    }else{
      this.showToastOnImage();
    }
    
    
  }
  riskClick(){
    localStorage.setItem("safeClick","HIGH");
    if(this.name != ''){
      
      this.router.navigateByUrl("/survey")
      localStorage.setItem("name", this.name);
    }else{
      this.showToastOnImage();
    }
    
  }
  async showToastOnImage() {
    const toast = await this.toastController.create({
      message: 'Enter Name',
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
