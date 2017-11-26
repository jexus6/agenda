import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment'

@Injectable()
export class ContactosService {
  
  //Inyeccion de dependencias de la clase HttpClient para usar
  //el cliente http
  constructor(private _httpClient: HttpClient){}

  obtenerContactos(): Observable <Contacto[]> {
    //El cliente http expone funciona para todos los verbos
    //del protocolo http. Estas funciones soportan genéricos
    //por lo qeu hay que indicar el tipo que se espera del servidor
    //estas funciones empaquetanla operación en un objeto observable
    //es necesario suscribirse al mismo para que la petición http se ejecute
    return this._httpClient.get<Contacto[]>(`${environment.rutaApi}/contactos`);
  }
  crearContacto(contacto: Contacto): Observable <Contacto> {
    return this._httpClient.post<Contacto>(`${environment.rutaApi}/contactos`, contacto);
  }

  eliminarContacto(contacto: Contacto): Observable <Contacto> {
    return this._httpClient.delete<Contacto>(`${environment.rutaApi}/contactos/${contacto.id}`);
  }
}
