import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleWrapperComponent} from './module-wrapper.component';
import {ModuleWrapperRoutingModule} from './module-wrapper-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from "./login.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule],
  declarations: [LoginComponent]
})
export class LoginModule {
}
