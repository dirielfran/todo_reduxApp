import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from '../filtros/filtro.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual!: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //this.store.select('todos').subscribe( todos => this.todos = todos);
    this.store.subscribe( ({filtros, todos }) => {
      this.filtroActual = filtros;
      this.todos = todos;
    })
  }

}
