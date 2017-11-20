import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Contacto} from '../contacto';




@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {

  @Output() botonGuardarPulsado = new EventEmitter <Contacto>();

  formularioContacto: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this._crearFormulario();
  }

  private _crearFormulario(): void {
    this.formularioContacto = this._formBuilder.group({
      nombre: ['', { validators: [Validators.minLength(3), Validators.required] }],
      apellidos: '',
      telefono: '',
      email: '',
      facebook: '',
      twitter: ''
    });
  }

  notificarCreacionContacto(): void {
    const contacto = this.formularioContacto.value as Contacto;
    this.botonGuardarPulsado.emit(contacto);
  }

}
