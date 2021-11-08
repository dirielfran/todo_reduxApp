import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export const initialState: filtrosValidos  = 'todos';

const _filtrosReducer = createReducer<filtrosValidos, Action>(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro ),
);

export function filtrosReducer(state: any, action: Action) {
  return _filtrosReducer(state, action);
}
