import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultRoutingModule
  ],
  declarations: [ResultComponent]
})
export class ResultModule {}
