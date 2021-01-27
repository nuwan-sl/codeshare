import { Injectable } from '@angular/core';
import { RequestAttributes } from '../../model/system/request-attributes';
import { Observable, throwError } from 'rxjs/index';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';

@Injectable()
export class BaseService {

  constructor(protected http: HttpClient) {

  }

  public get<T>(url: string, requestAttributes?: RequestAttributes): Observable<HttpResponse<T>> {

    return this.http.get<T>(url, {
      observe: 'response',
      headers: requestAttributes.headers,
      params: requestAttributes.params
    }).pipe(
      catchError(this.handleError)
    );
  }

  public post<T>(url: string, body: any, options?: RequestAttributes): Observable<HttpResponse<T>> {

    return this.http.post<T>(url, body, {
      observe: 'response',
      headers: options.headers,
      params: options.params
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(error);
  }
}
