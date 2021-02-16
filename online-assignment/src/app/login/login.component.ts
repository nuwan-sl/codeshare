import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../core/service/security/authentication.service';
import {DataKey, DataStore} from '../core/service/system/data-store.service';
import {AuthenticationServiceHandler} from '../core/service/service-handlers/authentication-service-handler';
import {ApiError} from "../core/model/system/api-error";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = 'admin321';
  invalidLogin = false;

  @Input() error: string | null;

  constructor(private router: Router, private dataStore: DataStore, private authenticationServiceHandler: AuthenticationServiceHandler) {
  }

  ngOnInit() {
  }

  submitLogin() {

    this.dataStore.get(DataKey.authentication).next(null);
    this.authenticationServiceHandler.authenticate(this.username, this.password);
    this.dataStore.get(DataKey.authentication).subscribe(data => {
      if (data) {
        this.authenticationServiceHandler.storeToken(data);
        this.router.navigate(['']);
        this.invalidLogin = false;
      } else if (data instanceof ApiError) {
        this.invalidLogin = true;
      }
    });

  }

}
