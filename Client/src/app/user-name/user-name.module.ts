import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { UserNameRoutingModule } from './user-name-routing.module';
import { UserNameComponent } from './user-name.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserNameRoutingModule
  ],
  declarations: [UserNameComponent]
})
export class UserNameModule {}
