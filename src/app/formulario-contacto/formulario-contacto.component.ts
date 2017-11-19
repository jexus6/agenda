import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {

  @Output() botonGuardarPulsado = new EventEmitter <any>();

  formularioContacto: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this._crearFormulario();
  }

  private _crearFormulario(): void {
    this.formularioContacto = this._formBuilder.group({
      nombre: ['', { validators: [Validators.minLength(3), Validators.required] }]
    });
  }

  notificarCreacionContacto(): void {
    this.botonGuardarPulsado.emit(this.formularioContacto.value);
  }

}
