import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {AuthenticationServiceHandler} from '../service-handlers/authentication-service-handler';
import {DataKey, DataStore} from '../system/data-store.service';
import {ApiError} from "../../model/system/api-error";
import {Common} from "../../utils/common";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router, private dataStore: DataStore, private common: Common,
              private authenticationServiceHandler: AuthenticationServiceHandler) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

   /* this.dataStore.get(DataKey.sessionValidity).next(null);
    this.authenticationServiceHandler.sessionValid();
    this.dataStore.get(DataKey.sessionValidity).subscribe(data => {
      if (this.common.dataValidity(data)) {
        return true;
      }
      else if (data instanceof ApiError) {
        this.router.navigate(['login']);
        return false;
      }
    });*/

    return true;

  }

}
