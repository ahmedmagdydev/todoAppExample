import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @ViewChild('newTodo') newTodo: ElementRef;
  constructor(private todoService: TodoService) {}
  hasError = false;
  addTodo(name) {
    if (this.newTodo.nativeElement.value == 0) {
      this.hasError = true;
    } else {
      this.hasError = false;
      this.todoService.addTodo(name);
      this.newTodo.nativeElement.value = '';
    }
  }
  ngOnInit(): void {}
}
