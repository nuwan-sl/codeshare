import { Injectable } from '@angular/core';
import { DataLoader } from '../system/data-loader';
import { DataKey } from '../system/data-store.service';
import { AuthRequest } from '../../model/request/auth-request';

@Injectable()
export class AuthenticationServiceHandler {

  constructor(private dataLoader: DataLoader) {

  }

  public authenticate(username, password) {
    const endpointId = "api-proxy/api/auth/signin";
    const authRequest: AuthRequest = new AuthRequest(username, password);
    this.dataLoader.postData(DataKey.authentication, endpointId, authRequest);
  }

  public sessionValid() {
    const endpointId = "api-proxy/api/test/valid";
    this.dataLoader.loadData(DataKey.sessionValidity, endpointId);
  }

  public storeToken(token: any) {
    sessionStorage.setItem("username", token.username);
    let tokenStr = "Bearer " + token.accessToken;
    sessionStorage.setItem("token", tokenStr);
  }

  public clearToken(token: any) {
    sessionStorage.removeItem("username");
  }

}
