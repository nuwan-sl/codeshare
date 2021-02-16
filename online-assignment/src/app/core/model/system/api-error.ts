import {ResponseError} from "./response-error";
import {CONSTANT} from "../../utils/constants";

export class ApiError extends ResponseError {
  constructor(message: any) {
    super(message);
  }
}
