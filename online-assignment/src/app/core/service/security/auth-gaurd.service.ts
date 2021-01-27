import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AuthenticationServiceHandler } from '../service-handlers/authentication-service-handler';
import { DataKey, DataStore } from '../system/data-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router, private dataStore: DataStore,
              private authenticationServiceHandler: AuthenticationServiceHandler) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.dataStore.get(DataKey.sessionValidity).next(null);
    this.authenticationServiceHandler.sessionValid();
    this.dataStore.get(DataKey.sessionValidity).subscribe(data => {
      if (data) {
        console.log(data);
        return true;
      }
    });

   /* if (this.authService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;*/
    return true;

  }

}
