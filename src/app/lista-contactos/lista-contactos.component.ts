import { EventEmitter, Input, Component, Output } from '@angular/core';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {
  @Input() contactos: string[];
  @Output() botonEliminarPulsado = new EventEmitter<string>();

  notificarContactoEliminar(contacto: string) : void {
    this.botonEliminarPulsado.emit(contacto);
  }
}
