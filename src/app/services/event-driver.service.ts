import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {
  sourceEventSubject: Subject<string> = new Subject<string>();
  sourceEventSubjectObservable= this.sourceEventSubject.asObservable();

  constructor() { }

  publishEvent(event: string){
   this.sourceEventSubject.next(event); 
  }

}
