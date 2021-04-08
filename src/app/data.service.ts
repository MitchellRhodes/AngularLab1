import { Injectable } from '@angular/core';
import { Todo } from './todo/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  newTask!: string;


  todos: Todo[] = [
    {
      task: 'Sweep pick 16th notes at 180bpm',
      completed: false
    },

    {
      task: 'Shred 16th notes at 200bpm',
      completed: false
    },

    {
      task: 'Legato triplet 8th notes at 260bpm',
      completed: true
    },

    {
      task: 'String Skipping at 240bpm',
      completed: true
    },

    {
      task: 'Demure by Shrezzers solo to speed',
      completed: false
    },

    {
      task: 'Record favorite riff and put on soundcloud',
      completed: true
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
