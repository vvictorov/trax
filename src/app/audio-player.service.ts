import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AudioPlayerService {

  constructor() { }

  // Observable string sources
  private stateChangedSource = new Subject<string>();

  // Observable string streams
  stateChanged$ = this.stateChangedSource.asObservable();

  // Service message commands
  changeState(state: string) {
    this.stateChangedSource.next(state);
  }
}
