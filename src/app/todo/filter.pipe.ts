import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], searchText: string | null) {

    if (!searchText) {
      return todos;
    }
    return todos.filter((todo: Todo) => todo.task.includes(searchText))
  };

}
