import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] crear Todo',
    props<{texto: string}>()
);
export const togleCompletado = createAction(
    '[TODO] Togle completado',
    props<{id: number}>()
);
export const editar = createAction(
    '[TODO] editar todo',
    props<{id: number, texto: string}>()
);
export const eliminar = createAction(
    '[TODO] eliminar todo',
    props<{id: number}>()
);
export const todoAll = createAction(
    '[TODO] Togle all',
    props<{completado: boolean}>()
);
export const cleanTodos = createAction(
    '[TODO] clean all'
);
