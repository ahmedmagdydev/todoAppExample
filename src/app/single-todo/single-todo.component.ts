import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
interface todo {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css'],
})
export class SingleTodoComponent implements OnInit {
  todos: todo[];
  constructor(private todoService: TodoService) {}
  changeStatus(e, i) {
    this.todoService.checkTodo(e, i);
  }
  removeTodo(e, i) {
    this.todoService.removeTodo(e, i, 'unChecked');
  }
  ngOnInit(): void {
    // this.todos = this.todoService.getAllTodos();
    this.todos = this.todoService.todos;
  }
}
