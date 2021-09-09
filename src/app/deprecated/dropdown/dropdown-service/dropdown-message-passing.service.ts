import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DropdownServiceModule } from './dropdown-service.module';

@Injectable({
  providedIn: DropdownServiceModule
})
export class DropdownMessagePassingService {
  private _map = new Map();

  initServiceInstance(id: number, text: string): BehaviorSubject<string>{
    const behaviorSubject = new BehaviorSubject(text);
    this._map.set(id, behaviorSubject);
    return behaviorSubject;
  }

  emitMessage(id: number, text: string): void{
    this._map.get(id).next(text);
  }
}
