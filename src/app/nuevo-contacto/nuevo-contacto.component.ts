import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService } from '../contactos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent {

  constructor(private _contactosService: ContactosService, 
  private _router: Router) { }
  
  guardarContacto(contacto: Contacto): void {
    this._contactosService.crearContacto(contacto);
    this._router.navigateByUrl('/todos');
  }

}
