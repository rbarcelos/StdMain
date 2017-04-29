import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class TaskManagerService {

  constructor() { }
    
  waitAll(objs:any[], taskFunction)
  {
      let observableBatch = [];

      for (let idx in objs) {
          var task = Observable.create(observer => 
            {
              var res = taskFunction(objs[idx]);
              observer.next(res);
              observer.complete();
            });
          
          observableBatch.push(task);
      }

     return Observable.forkJoin(observableBatch);  
  }

}
