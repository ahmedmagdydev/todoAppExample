import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-checked-todos',
  templateUrl: './checked-todos.component.html',
  styleUrls: ['./checked-todos.component.css'],
})
export class CheckedTodosComponent implements OnInit {
  todos;
  constructor(private todoService: TodoService) {}
  changeStatus(e, i) {
    this.todoService.unCheckTodo(e, i);
  }
  removeTodo(e, i) {
    this.todoService.removeTodo(e, i, 'checked');
  }
  ngOnInit(): void {
    this.todos = this.todoService.checkedTodos;
  }
}
