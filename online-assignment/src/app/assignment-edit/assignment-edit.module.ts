import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentEditComponent } from './assignment-edit.component';
import { AssignmentEditRoutingModule } from './assignment-edit-routing.module';

@NgModule({
  declarations: [AssignmentEditComponent],
  imports: [
    CommonModule, AssignmentEditRoutingModule
  ]
})
export class AssignmentEditModule {}
