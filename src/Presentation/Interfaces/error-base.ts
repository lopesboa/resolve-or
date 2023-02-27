export interface IErrorWithCause<T> {
  name: T;
  message: string;
  cause: any;
}
