import { Injectable } from '@angular/core';
import { KeyValue } from '../../model/system/key-value';

@Injectable()
export class HeaderService {

  private headers: KeyValue[] = [];

  public setHeaders(headers: KeyValue[]): void {
    this.headers = headers;
  }

  public getHeaders(): KeyValue[] {
    return this.headers;
  }

  public addHeader(key: string, value: string): void{
    let header: KeyValue = new KeyValue();
    header.key = key;
    header.value = value;
    this.headers.push(header);
  }
}
