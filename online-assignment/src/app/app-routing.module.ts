import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from './core/service/security/auth-gaurd.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGaurdService],
    loadChildren: () =>
      import('./module-wrapper/module-wrapper.module').then(m => m.ModuleWrapperModule)
  },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
