import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
name : string = '';
fever : string = '';
hotspot : string = '';
contact : string = '';
cough : string = '';
pain : string = '';
throat : string = '';
primaryaffected : string = '';
numberAffected : number = 0;
  constructor(public toastController: ToastController,private router: Router) { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
  }
  submitSurvey(){
    this.numberAffected = 0;
    if(this.fever == '' || this.contact == '' || this.cough == '' || this.hotspot == '' || this.pain == '' || this.throat == ''){
      this.showToastOnImage("Answer all questions");
    }else{
      if(this.contact == "yes"){
        localStorage.setItem("risk","HIGH");
        this.navigateToResult();
      }else{
        if(this.fever == "yes"){
          this.numberAffected = this.numberAffected + 1;
        }
        if(this.cough == "yes"){
          this.numberAffected = this.numberAffected + 1;
        }
        if(this.hotspot == "yes"){
          this.numberAffected = this.numberAffected + 1;
        }
        if(this.pain == "yes"){
          this.numberAffected = this.numberAffected + 1;
        }
        if(this.throat == "yes"){
          this.numberAffected = this.numberAffected + 1;
        }
        this.calculateRisk(this.numberAffected);
      }
    }
  }
  calculateRisk(number){
    if(number >= 3){
      localStorage.setItem("risk","HIGH");
    }else{
      localStorage.setItem("risk","LOW");
    }
    this.navigateToResult();
    
  }
  navigateToResult(){
    this.router.navigateByUrl("/result");
  }
  async showToastOnImage(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

}
