import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo/todo';
import { DataService } from '../data.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  searchText: string | null = null;
  newTask!: string;
  todos!: Todo[];


  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.todos = this.data.getTodos();
  }

  addTodo() {
    this.data.addTodo(this.newTask);
  }

  removeTodo(todo: Todo) {
    this.data.deleteTodo(todo);
  }
}
