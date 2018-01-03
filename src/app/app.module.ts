import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './contactos.service';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { DatosContactoPipe } from './datos-contacto.pipe';


@NgModule({
  //Indicamos todos los componentes, directivas y pipes de nuestra app. 
  // Si no lo añadidomos nuestra app (módulo) no sabrá cómo pintarlos o utilizarlos
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioContactoComponent,
    NuevoContactoComponent,
    MisContactosComponent,
    DetallesContactoComponent,
    DatosContactoPipe
  ],
  //Todos los modulos de los cuales depende nuestra app para funcionar.
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  //Todo lo que quiera inyectarse como dependencia en nuestra app (servicios, clases y valores)
  //De no hacerlo Angular no sabe como instanciarlo.
  providers: [ContactosService],
  //Componente raiz de nuestra app.
  bootstrap: [AppComponent]
})
export class AppModule { }

