import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../contacto';


@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent  {
  //Decoración con Output os atributos que emitan datos a un componente padre
  //estos atributos deben de ser de tipo EvenEmitter
  @Output() botonEliminarPulsado = new EventEmitter<Contacto>();

  @Input() contacto: Contacto;


  navegarPerfilFacebook(): void {
    const ruta = `https://wwww.facebook.com/${this.contacto.facebook}`;
    window.open(ruta, '_blank');
  }

  navegarPerfilTwitter(): void {
    const ruta = `https://twitter.com/${this.contacto.twitter}`;
    window.open(ruta, '_blank');
  }

  notificarContactoEliminar(): void {
    this.botonEliminarPulsado.emit(this.contacto);
  }
}
