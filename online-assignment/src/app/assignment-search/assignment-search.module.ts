import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentSearchComponent } from './assignment-search.component';
import { AssignmentSearchRoutingModule } from './assignment-search-routing.module';

@NgModule({
  declarations: [AssignmentSearchComponent],
  imports: [
    CommonModule, AssignmentSearchRoutingModule
  ]
})
export class AssignmentSearchModule {}
