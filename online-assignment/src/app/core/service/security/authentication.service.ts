import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

export class User {
  constructor(public status: string) {
  }
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  loginToken: any;

  constructor(private httpClient: HttpClient) {
  }

  // Provide username and password for authentication, and once authentication is successful,
  //store JWT token in session
  authenticate(username, password) {
    return this.httpClient
      .post<any>("api-proxy/api/auth/signin", {username, password})
      .pipe(
        map(token => {
          this.loginToken = token;
          sessionStorage.setItem("username", this.loginToken.username);
          let tokenStr = "Bearer " + this.loginToken.accessToken;
          sessionStorage.setItem("token", tokenStr);
          return this.loginToken;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }
}
