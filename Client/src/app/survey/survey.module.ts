import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SurveyComponent } from './survey.component';
import { SurveyRoutingModule } from './survey-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyRoutingModule
  ],
  declarations: [SurveyComponent]
})
export class SurveyModule {}
