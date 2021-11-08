import { ActionReducerMap } from "@ngrx/store";
import { filtrosValidos } from "./todos/filtros/filtro.actions";
import { Todo } from "./todos/models/todo.model";
import { todoReducer }  from './todos/todo.reducer';
import { filtrosReducer } from './todos/filtros/filtro.reducer';


export interface AppState{
  todos: Todo[],
  filtros: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtros: filtrosReducer
}
