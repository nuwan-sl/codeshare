import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWrapperComponent } from './module-wrapper.component';
import { ModuleWrapperRoutingModule } from './module-wrapper-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, ModuleWrapperRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule],
  declarations: [ModuleWrapperComponent]
})
export class ModuleWrapperModule {}
