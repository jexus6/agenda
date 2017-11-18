import { Injectable } from '@angular/core';

@Injectable()
export class ContactosService {

   private _listaContactos: string [] = [
        'Bill Gates',
        'Tim Cook',
        'Elon Musk',
        'Steve Wozniak',
        'Sundar Pichai'
      ];

   obtenerContactos(): string []{
        return this._listaContactos;
   }   

   eliminarContacto(contacto: string): void {

    this._listaContactos = this._listaContactos.filter(c => c !== contacto);
   }
}
