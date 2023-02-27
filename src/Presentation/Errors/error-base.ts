import { IErrorWithCause } from "../Interfaces

export class ErrorBase<T extends string> extends Error {
  public name: T;
  public message: string;
  public cause: any;

  constructor(private readonly error: IErrorWithCause<T>) {
    super();
    this.name = this.error.name;
    this.message = this.error.message;
    this.cause = this.error.cause;
  }
}
