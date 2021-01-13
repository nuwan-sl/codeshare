import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchPadRoutingModule } from './launch-pad-routing.module';
import { LaunchPadComponent } from './launch-pad.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LaunchPadComponent],
  imports: [
    CommonModule, LaunchPadRoutingModule, MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LaunchPadModule {}
