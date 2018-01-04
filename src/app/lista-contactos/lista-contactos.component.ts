import { EventEmitter, Input, Component, Output } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  sentidoOrdenacion = 'asc';

  @Input() contactos: Contacto[];

/*  @Output() botonEliminarPulsado = new EventEmitter<Contacto>();
  notificarContactoEliminar(contacto: Contacto) : void {
    this.botonEliminarPulsado.emit(contacto);
  }*/

  @Output() contactoSeleccionado = new EventEmitter<Contacto>();
  notificarContactoSeleccionado(contacto: Contacto): void {
    this.contactoSeleccionado.emit(contacto);
  }

  cambiarSentidoOrdenacion(): void {
    this.sentidoOrdenacion = this.sentidoOrdenacion === 'asc' ? 'desc' : 'asc';
  }

}
