import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AssignmentSearchComponent } from './assignment-search/assignment-search.component';
import { AssignmentEditComponent } from './assignment-edit/assignment-edit.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BasicAuthHtppInterceptorService } from './core/service/security/basic-auth-interceptor.service';
import { BaseService } from './core/service/system/base-service';
import { DataLoader } from './core/service/system/data-loader';
import { DataStore } from './core/service/system/data-store.service';
import { HeaderService } from './core/service/system/header.service';
import { AuthenticationServiceHandler } from './core/service/service-handlers/authentication-service-handler';

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHtppInterceptorService,
      multi: true
    },
    AuthenticationServiceHandler,
    BaseService,
    DataLoader,
    DataStore,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
