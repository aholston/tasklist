import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../task.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newTask;
  errors;

  constructor(
    private _taskService: TaskService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.newTask = {title: '', description: ''};
    this.errors = '';
  }

  createTask() {
    let observable = this._taskService.create(this.newTask);
    observable.subscribe(
      (data) => {
        this._router.navigate(['/']);
      },
      (err) => {
        this.errors = err;
      })
  }

}
