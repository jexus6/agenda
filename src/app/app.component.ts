import { Component, OnInit } from '@angular/core';
import { ContactosService } from './contactos.service';
import { Contacto } from './contacto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listaContactos: Contacto[];

  constructor(private _contactosService: ContactosService) { }

  ngOnInit(): void {
    console.log('APPComponent on Init');
    this.listaContactos = this._contactosService.obtenerContactos();
  }

  guardarContacto(contacto: Contacto): void {
    this._contactosService.crearContacto(contacto);
    this.listaContactos = this._contactosService.obtenerContactos();
  }

  borrarContacto(contacto: Contacto): void {
     this._contactosService.eliminarContacto(contacto);
     this.listaContactos = this._contactosService.obtenerContactos();
  }

}
