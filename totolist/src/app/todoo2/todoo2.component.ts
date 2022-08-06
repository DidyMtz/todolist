import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todoo2',
  templateUrl: './todoo2.component.html',
  styleUrls: ['./todoo2.component.scss']
})
export class Todoo2Component implements OnInit {

  Todos : Todo[]=[];
  newtodo!: any;

  constructor() { }

  ngOnInit(): void {
  }



  addTask(){

    if(this.newtodo){

      let todo = new Todo();
      todo.name = this.newtodo;
      todo.isCompleted = true;
      this.Todos.push(todo);
      this.newtodo ="";
  

     }else{
        alert("Add todo");
     }
   
  }




}
