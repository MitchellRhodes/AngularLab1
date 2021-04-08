import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../todo'
import { DataService } from '../../data.service'



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] | any;

  @Output() remove = new EventEmitter<Todo>();

  @Input() searchText: string | null = null;


  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.todos = this.data.getTodos();
  }


  trackByTodo(index: number, todo: any) {
    return todo.task;
  }

  completeTodo(todo: Todo) {
    this.data.completeTodo(todo);
  };


  removeTodo(todo: Todo) {
    if (todo) {
      this.remove.emit(todo);
    }
  }
};
