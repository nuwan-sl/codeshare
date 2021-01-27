import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentEditComponent } from './assignment-edit.component';
import { AssignmentEditRoutingModule } from './assignment-edit-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [AssignmentEditComponent],
  imports: [
    MatTabsModule,
    CommonModule,
    AssignmentEditRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AssignmentEditModule {}
