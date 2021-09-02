import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownMessagePassingService {
  private _map = new Map();

  constructor() {
  }

  initServiceInstance(id: number, text: string): BehaviorSubject<string>{
    let behaviorSubject = new BehaviorSubject(text);
    this._map.set(id, behaviorSubject);
    return behaviorSubject;
  }

  emitMessage(id: number, text: string): void{
    this._map.get(id).next(text);
  }
}
