import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchPadComponent } from './launch-pad.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchPadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchPadRoutingModule {}
