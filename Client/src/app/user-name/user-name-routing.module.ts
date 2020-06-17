import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNameComponent } from './user-name.component';

const routes: Routes = [
  {
    path: '',
    component: UserNameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserNameRoutingModule {}
