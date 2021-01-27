import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { DataKey, DataStore } from './data-store.service';
import { CONSTANT } from '../../utils/constants';
import { BehaviorSubject } from 'rxjs/index';
import { RequestAttributes } from '../../model/system/request-attributes';
import { KeyValue } from '../../model/system/key-value';
import { HeaderService } from './header.service';
import { ResponseWrapper } from '../../model/system/response-wrapper';
import { BaseService } from './base-service';
import SUCCESS = CONSTANT.HTTP_STATUS.SUCCESS;
import { ResponseError } from '../../model/system/response-error';

@Injectable()
export class DataLoader {

  errorMessage = null;

  constructor(private dataStore: DataStore, private headerService: HeaderService, private baseService: BaseService) {}

  public loadData<T>(dataKey: DataKey, endpointId: string, params?: HttpParams, pathVariables?: any[]) {

    let url = endpointId;

    if (pathVariables && pathVariables.length > 0) {
      url = this.getUrl(url, pathVariables);
    }

    // clear errors
    this.dataStore.set(DataKey.error, {});

    // if there is no entry for the given data key, create a new subject and store it there
    if (!this.dataStore.has(dataKey)) {
      this.dataStore.set(dataKey, new BehaviorSubject(null));
    }

    // create default http headers
    this.createHeaders();
    let requestAttributes: RequestAttributes = new RequestAttributes();
    requestAttributes.params = params;
    requestAttributes.headers = new HttpHeaders();

    let headers: KeyValue[] = this.headerService.getHeaders();
    headers.forEach((header) => {
      requestAttributes.headers = requestAttributes.headers.append(header.key, header.value);
    });

    this.baseService.get<ResponseWrapper<T>>(url, requestAttributes).subscribe({
      next: (data: any) => {
        if (data && data.status === CONSTANT.HTTP_STATUS.SUCCESS) {
          this.handleProcessDataWhenLoadResponse(data, dataKey);
        }
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });

  }

  public postData<T>(dataKey: DataKey, endpointId: string, rqBody: any, params?: HttpParams,
                     pathVariables?: any[]) {

    let url = endpointId;

    if (pathVariables && pathVariables.length > 0) {
      url = this.getUrl(url, pathVariables);
    }

    // clear errors
    this.dataStore.set(DataKey.error, {});

    // if there is no entry for the given data key, create a new subject and store it there
    if (!this.dataStore.has(dataKey, true)) {
      this.dataStore.set(dataKey, new BehaviorSubject(null));
    }


    // create default http headers
    this.createHeaders();
    let requestAttributes: RequestAttributes = new RequestAttributes();
    requestAttributes.params = params;
    requestAttributes.headers = new HttpHeaders();

    // set additional headers if any
    let headers: KeyValue[] = this.headerService.getHeaders();
    headers.forEach((header) => {
      requestAttributes.headers = requestAttributes.headers.append(header.key, header.value);
    });


    let resultsWrapper: ResponseWrapper<T>;
    this.baseService.post<ResponseWrapper<T>>(url, rqBody, requestAttributes).subscribe({
      next: (response: HttpResponse<any>) => {
        if (this.isValidResponse(response)) {
          this.dataStore.set(dataKey, this.getData(response));
        } else {
          this.dataStore.set(dataKey, new ResponseError());
        }
      },
      error: error => {
        this.errorMessage = error.message;
        this.dataStore.set(dataKey, new ResponseError());
        console.error('There was an error!', error);
      }
    });
    ;
  }

  private getUrl(url: string, pathVariables: any[]): string {

    let bracketPathVariables = url.match(/\{([^}]+)\}/g);
    pathVariables.forEach((pathVariable, i) => {
      if (bracketPathVariables && bracketPathVariables.length > 0) {
        url = url.replace(bracketPathVariables[i], pathVariable);
      } else {
        url = url + '/' + pathVariable;
      }
    });
    return url;
  }

  private handleProcessDataWhenLoadResponse<T>(results: any, dataKey: DataKey) {
    if (results && dataKey) {
      const resultsWrapper: ResponseWrapper<T> = results;
      if (resultsWrapper) {
        this.dataStore.set(dataKey, resultsWrapper);
      }
    }
  }

  isValidResponse(response: HttpResponse<any>) {
    let valid = false;
    if (response && response.status === CONSTANT.HTTP_STATUS.SUCCESS) {
      valid = true;
    }
    return valid;
  }

  getData(response: HttpResponse<any>) {
    let data: any = null;
    if (response.body /*&& response.body.status.code === CONSTANT.API_RESPONSE_STATUS.SUCCESS*/) {
      data = response.body;
    }
    return data;
  }

  createHeaders(): void {
    const header: KeyValue[] = [];

    const contentType: KeyValue = new KeyValue();
    contentType.key = 'Content-Type';
    contentType.value = 'application/json';

    const auth: KeyValue = new KeyValue();
    auth.key = 'Authorization';
    auth.value = sessionStorage.getItem('token');

    header.push(contentType);
    header.push(auth);
    this.headerService.setHeaders(header);
  }

}
