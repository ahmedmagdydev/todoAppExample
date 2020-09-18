import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
export interface todo {
  name: string;
  checked: boolean;
}
@Injectable()
export class TodoService {
  todos = [
    {
      name: 'publish app',
      checked: false,
    },
    {
      name: 'recive money',
      checked: false,
    },
  ];
  checkedTodos: todo[] = [
    {
      name: 'create my first app',
      checked: true,
    },
    {
      name: 'test app',
      checked: true,
    },
  ];
  constructor(private http: HttpClient, private afs: AngularFirestore) {}

  checkTodo(e, index) {
    this.todos[index].checked = true;

    this.checkedTodos.push(this.todos[index]);
    this.todos.splice(index, 1);
  }
  unCheckTodo(e, index) {
    this.checkedTodos[index].checked = false;
    this.todos.push(this.checkedTodos[index]);
    this.checkedTodos.splice(index, 1);
  }
  addTodo(name) {
    console.log('TodoService -> addTodo -> name', name);
    const todo = { name: name, checked: false };
    this.todos.push(todo);
  }
  removeTodo(e, index, state) {
    if (state == 'checked') {
      this.checkedTodos.splice(index, 1);
    } else {
      this.todos.splice(index, 1);
    }
  }
}
