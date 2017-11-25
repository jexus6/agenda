import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

  listaContactos: Contacto[];
  
  constructor(private _contactosService: ContactosService) { }

  ngOnInit() {
    this.listaContactos = this._contactosService.obtenerContactos();
  }

  borrarContacto(contacto: Contacto): void {
    this._contactosService.eliminarContacto(contacto);
    this.listaContactos = this._contactosService.obtenerContactos();
 }

}
