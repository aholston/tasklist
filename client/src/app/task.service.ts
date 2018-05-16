import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  get() {
    
    return this._http.get('/tasks');
  }

  create(task) {
    console.log(`Here: ${task}`);
    return this._http.post('/tasks', task);
  }

}
