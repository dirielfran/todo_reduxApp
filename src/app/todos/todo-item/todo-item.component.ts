import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  chkCompletado!: FormControl;
  txtInput!: FormControl;
  editando: boolean = false;
  @ViewChild('elemFisico') txtInputFisico!: ElementRef;
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl( this.todo.completado, Validators.required);

    this.chkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch( actions.togleCompletado({id: this.todo.id}))
    })
  }

  editar(){
    this.editando = true;
    this.txtInput.setValue( this.todo.texto);
    setTimeout(()=>{
      this.txtInputFisico.nativeElement.select();
    },1)
  }

  eliminar(){
    this.store.dispatch( actions.eliminar({ id: this.todo.id }))
  }

  terminarEdicion(){
    this.editando = false;
    if( this.txtInput.invalid ) return;
    if( this.txtInput.value === this.todo.texto ) return;

    this.store.dispatch(
      actions.editar({
        id: this.todo.id,
        texto: this.txtInput.value
      })
    );
  }

}
