import { Todoo2Component } from './todoo2/todoo2.component';
import { Todo1Component } from './todo1/todo1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: Todo1Component},
  { path:'todo1', component: Todo1Component},
  { path:'todo2', component: Todoo2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
