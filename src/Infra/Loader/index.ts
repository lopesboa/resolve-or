import { BehaviorSubject, Observable } from 'rxjs';

export class Loader {
  private static instance?: Loader;
  private isLoading$ = new BehaviorSubject<boolean>(false);

  get isLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  private constructor() {}

  public static getInstance(): Loader {
    if (!Loader.instance) {
      Loader.instance = new Loader();
    }
    return Loader.instance;
  }

  public show(): void {
    this.isLoading$.next(true);
  }

  public hide(): void {
    this.isLoading$.next(false);
  }

  public static clearInstance(): void {
    delete this.instance;
  }
}
