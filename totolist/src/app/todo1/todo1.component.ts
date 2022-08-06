import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.scss']
})
export class Todo1Component implements OnInit {

  newtodo!: string;
  iscompleted!: boolean;
  Todo : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSave(){
    if(this.newtodo){

      this.Todo.push({id: this.Todo.length,name : this.newtodo});
      this.newtodo = "";

    }else{
      alert("Merci d'entrer une tache");
    }
  }

  onDelete(id:number){
   this.Todo = this.Todo.filter((item) => item.id !== id);
  
   console.log(this.Todo);
   
  }




}
