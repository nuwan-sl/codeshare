import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentEditComponent } from './assignment-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentEditRoutingModule {}
