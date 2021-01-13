import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentSearchComponent } from './assignment-search.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentSearchRoutingModule {}
