import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../task.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  tasks;
  errors;

  constructor(private _taskService: TaskService) { }

  ngOnInit() {

    this.getTasks();

  }

  getTasks() {

    let observable = this._taskService.get();
    console.log(observable);
    observable.subscribe(
      (data) => {
        let res = data.json();
        this.tasks = res.data;

      },
      (err) => {
        this.errors = err;
      });
  }

}
