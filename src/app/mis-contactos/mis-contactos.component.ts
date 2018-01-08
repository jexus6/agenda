import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService } from '../contactos.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

  // listaContactos: Contacto[];
  contactos$: Observable<Contacto[]>;
  contactoSeleccionado: Contacto;
  constructor(private _contactosService: ContactosService) { }

  ngOnInit() {

    /*Otro metodo de subscribirse a  la listaContactos 
    this._contactosService.obtenerContactos().subscribe((contactos: Contacto[]) => {
       this.listaContactos = contactos;
     });*/
    this._recuperarContactosDesdeServidor();
  }
  private _recuperarContactosDesdeServidor(): void {
    this.contactos$ = this._contactosService.obtenerContactos();
  }

  verDetallesContacto(contacto: Contacto): void {
    this.contactoSeleccionado = contacto;
  }

  preguntarEliminarContacto(contacto: Contacto): void {
    // Pregunta al usuario
    if (confirm(`¿Deseas realmente eliminar a ${contacto.nombre} ${contacto.apellidos}?`)) {
      // Lo eliminamos
      this._contactosService.eliminarContacto(contacto).subscribe(() => {
        // Una vez la petion HTTP de la eliminacion ha terminado, deselecionamos
        // el contacto eliminado 
        this.contactoSeleccionado = null;
        // y refrescamos la lista
        this._recuperarContactosDesdeServidor();
      });
    }
  }
}
