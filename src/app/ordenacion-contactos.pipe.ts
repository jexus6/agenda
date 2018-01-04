import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from './contacto';

@Pipe({
  name: 'ordenacionContactos'
})
export class OrdenacionContactosPipe implements PipeTransform {

  transform(contactos: Contacto[], sentido : string = 'asc'): Contacto[] {
    let ordenados: Contacto[];

    if (contactos){

      if (sentido === 'asc') {
        ordenados = contactos.sort((contactoA: Contacto, contactoB: Contacto): number => {
          let comparacion: number;
          //Comparamos por nombre y apellidos
          const nombreCompletoA = `${contactoA.nombre} ${contactoA.apellidos}`.toLowerCase();
          const nombreCompletoB = `${contactoB.nombre} ${contactoB.apellidos}`.toLowerCase();
          //Si el resultado de la comparación es 1 : A>B , es decir A va por delante 
          if (nombreCompletoA > nombreCompletoB) {
            comparacion = 1;
          }else if (nombreCompletoA < nombreCompletoB){
          //Si el resultado es -1 significa A<B por lo que A va detrás
            comparacion =-1;
          }else{
            comparacion = 0;
          }
          //Si es 0 A=B, por tanto A y B pueden ir en cualquier orden.
          return comparacion;
        })
      //sentido descendente
      } else {
        ordenados = contactos.sort((contactoA: Contacto, contactoB: Contacto): number => {
          let comparacion: number;
          //Comparamos por nombre y apellidos
          const nombreCompletoA = `${contactoA.nombre} ${contactoA.apellidos}`.toLowerCase();
          const nombreCompletoB = `${contactoB.nombre} ${contactoB.apellidos}`.toLowerCase();
          //Si el resultado de la comparación es 1 : B>A , es decir B va por delante 
          if (nombreCompletoA < nombreCompletoB) {
            comparacion = 1;
          }else if (nombreCompletoA > nombreCompletoB){
          //Si el resultado es -1 significa B<A por lo que B va detrás
            comparacion =-1;
          }else{
            comparacion = 0;
          }
          //Si es 0 A=B, por tanto A y B pueden ir en cualquier orden.
          return comparacion;
        })

      }
    }else{
      ordenados=[];
    }

    return ordenados;
  }

}
