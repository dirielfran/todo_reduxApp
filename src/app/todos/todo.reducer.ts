import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, togleCompletado, editar, eliminar, todoAll, cleanTodos} from './todo.actions';

export const estadoInicial : Todo[] = [
          new Todo('Salvar al mundo'),
          new Todo('Vencer a thanos'),
          new Todo('Comprar traje de Iroman'),
          new Todo('Robar escudo del capitan America'),
        ];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(eliminar, (state, {id}) => state.filter( todo => todo.id !== id )),
  on(cleanTodos, (state) => state.filter( todo => !todo.completado )),
  on(todoAll, (state, {completado}) => state.map( todo => {
    return {
      ...todo,
      completado: completado
    }
  })),
  on(togleCompletado, (state, {id}) => {
    return state.map( todo => {
      if( todo.id === id ){
        return {
          ...todo,
          completado: !todo.completado
        }
      }else{
          return todo;
      }
    });
  }),
  on(editar, (state, {id, texto}) => {
    return state.map( todo => {
      if( todo.id === id ){
        return {
          ...todo,
          texto: texto
        }
      }else{
          return todo;
      }
    });
  }),
);

export function todoReducer(estado: Todo[] | undefined, action: Action) {
  return _todoReducer(estado, action);
};
