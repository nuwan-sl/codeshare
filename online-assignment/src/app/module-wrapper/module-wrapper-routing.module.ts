import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWrapperComponent } from './module-wrapper.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'launch-pad',
    pathMatch: 'full'
  },
  {
    path: 'launch-pad',
    component: ModuleWrapperComponent,
    loadChildren: () =>
      import('../launch-pad/launch-pad.module').then(m => m.LaunchPadModule)
  },
  {
    path: 'assignment-search',
    component: ModuleWrapperComponent,
    loadChildren: () =>
      import('../assignment-search/assignment-search.module').then(m => m.AssignmentSearchModule)
  },
  {
    path: 'assignment-edit',
    component: ModuleWrapperComponent,
    loadChildren: () =>
      import('../assignment-edit/assignment-edit.module').then(m => m.AssignmentEditModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleWrapperRoutingModule {}
