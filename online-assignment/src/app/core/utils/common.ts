import {ApiError} from "../model/system/api-error";

export class Common {

  public dataValidity(data: any): boolean {
    if (data && !(data instanceof ApiError)) {
      return (JSON.stringify(data) !== JSON.stringify({}) && JSON.stringify(data) !== JSON.stringify([]));
    }
  }
}
