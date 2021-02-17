import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentSearchComponent } from './assignment-search.component';
import { AssignmentSearchRoutingModule } from './assignment-search-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'; 

@NgModule({
  declarations: [AssignmentSearchComponent],
  imports: [
    MatPaginatorModule,
    CommonModule,
    AssignmentSearchRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class AssignmentSearchModule {}
