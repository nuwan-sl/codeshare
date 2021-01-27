export declare class ResponseWrapper<T> {
  static SUCCESS: number;
  static ERROR: number;
  static WARNING: number;
  apiVersion: string;
  status: ResponseWrapperStatus;
  error: ResponseWrapperError;
  data: Array<T>;
}
export declare class ResponseWrapperError {
  code: number;
  message: string;
  details: string;
  errors: Array<string>;
}
export declare class ResponseWrapperStatus {
  code: number;
  message: string;
}
