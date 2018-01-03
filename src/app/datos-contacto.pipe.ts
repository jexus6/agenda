import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from './contacto';

//Los pIpes son clases decoradas con el decorador '@Pipe'. Es necesario 
//indicar el metadado 'name'; indica el nombre para aplicarlo

//tiene que implementar Pipetransform y por lo tanto
// la función transform que como mínínimo espera el parametro a 
//transformar
@Pipe({
  name: 'datosContacto'
})
export class DatosContactoPipe implements PipeTransform {

  transform(contacto: Contacto): string {
    //Si tenemos los dos datos (correo y telefono) debemos retornar
    //'telefono || email' . Si solo tenemos uno de los datos, lo retornamos tal cual
    //Si no tenemos ninguno, retornamos cadena de texto vacia.
    let datos: string;

    if (contacto.telefono && contacto.email){
      datos = `${contacto.telefono} || ${contacto.email}`;    
    }
    else if (contacto.telefono){
      datos = contacto.telefono;
    }
    else if  (contacto.email) {
      datos = contacto.email;
    }
    else {
      datos = '';
    }

    return datos;
  }

  

  

}
