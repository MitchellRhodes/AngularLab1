import { Injectable } from '@angular/core';
import { Todo } from './todo/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  newTask!: string;


  todos: Todo[] = [
    {
      task: 'Get started by adding your own tasks',
      completed: false
    },
  ];

  constructor() { }

  getTodos() {
    return this.todos;
  }

  addTodo(newTask: string) {
    this.todos.push({ task: newTask, completed: false });
  }

  completeTodo(todo: Todo) {
    todo.completed = true;
  };

  deleteTodo(todo: Todo) {
    this.todos?.splice(this.todos?.indexOf(todo), 1)
  }
}
