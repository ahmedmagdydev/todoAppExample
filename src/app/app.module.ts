import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { TodoService } from './todo.service';
import { CheckedTodosComponent } from './checked-todos/checked-todos.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ReportsComponent } from './pages/reports/reports.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddTodoComponent,
    SingleTodoComponent,
    CheckedTodosComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
