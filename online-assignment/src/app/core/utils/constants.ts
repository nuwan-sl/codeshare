import { Injectable } from '@angular/core';

@Injectable()
export class Constant {

  public get(ns: string, code: string): string {
    return CONSTANT[ns][code];
  }
}

export namespace CONSTANT {
  export namespace HTTP_STATUS {
    export const SUCCESS = 200;
  }
  export namespace API_RESPONSE_STATUS {
    export const SUCCESS = 200;
  }
  export namespace ERROR_CODES {
    export const SUCCESS: number = 1;
    export const ERROR: number = -1;
    export const WARNING: number = 0;
  }

  export namespace ERROR {
    export const API_ERROR = 'API_ERROR';
  }
}
