import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from './task/task.component';
import { NewComponent } from './task/new/new.component';
import { IndexComponent } from './task/index/index.component';

const routes: Routes = [
  { path: 'new', component: NewComponent },
  { path: '', pathMatch: 'full', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TaskComponent, NewComponent, IndexComponent]
