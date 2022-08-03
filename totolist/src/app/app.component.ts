import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'totolist';

  todos : Todo[] = [];
  newTodo! : string;
  message: string = "";


  saveTodo(){
    if(this.newTodo){

      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo ="";

    }else{
     // this.message="Please add Todo";
      alert("Please add Todo");
    }
  }

  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id:number){
    this.todos = this.todos.filter((v,i) => i !== id);
  }




}