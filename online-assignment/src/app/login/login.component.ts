import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/service/security/authentication.service';
import { DataKey, DataStore } from '../core/service/system/data-store.service';
import { AuthenticationServiceHandler } from '../core/service/service-handlers/authentication-service-handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'mod';
  password = '12345678';
  invalidLogin = false;

  @Input() error: string | null;

  constructor(private router: Router, private dataStore: DataStore, private authenticationServiceHandler: AuthenticationServiceHandler) { }

  ngOnInit() {
  }

  checkLogin() {
    /*(this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate([''])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true
          this.error = error.message;
        }
      )
    );*/

    this.dataStore.get(DataKey.authentication).next(null);
    this.authenticationServiceHandler.authenticate(this.username, this.password);
    this.dataStore.get(DataKey.authentication).subscribe(data => {
      if (data) {
        this.authenticationServiceHandler.storeToken(data);
        console.log(data);
        this.router.navigate(['']);
      }
    });

  }

}
