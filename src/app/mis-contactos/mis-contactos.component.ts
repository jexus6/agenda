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

  //listaContactos: Contacto[];
  contactos$: Observable<Contacto[]>;
  contactoSeleccionado: Contacto;
  constructor(private _contactosService: ContactosService) { }

  ngOnInit() {

    /*Otro metodo de subscribirse a  la listaContactos 
    this._contactosService.obtenerContactos().subscribe((contactos: Contacto[]) => {
       this.listaContactos = contactos;
     });*/

    this.contactos$ = this._contactosService.obtenerContactos();

  }


  verDetallesContacto(contacto: Contacto): void{
    this.contactoSeleccionado = contacto;
  }
/*
  borrarContacto(contacto: Contacto): void {
    //this._contactosService.eliminarContacto(contacto);
    //this.listaContactos = this._contactosService.obtenerContactos();
    
  }*/

}
