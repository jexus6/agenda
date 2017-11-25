import { Injectable } from '@angular/core';
import { Contacto } from './contacto';

@Injectable()
export class ContactosService {

   private _listaContactos: Contacto [] = [
        {nombre: 'Bill ', apellidos: 'Gates'},
        {nombre: 'Tim ', apellidos: 'Cook'},
        {nombre: 'Elon ', apellidos: 'Musk'},
        {nombre: 'Steve ', apellidos: 'Wozniak'},
        {nombre: 'Sundar ', apellidos: 'Pichai'}
      ];

   obtenerContactos(): string [] {
        return this._listaContactos;
   }
   crearContacto(contacto: string): void {
     this._listaContactos.push(contacto);
   }

   eliminarContacto(contacto: string): void {

    this._listaContactos = this._listaContactos.filter(c => c !== contacto);
   }
}
