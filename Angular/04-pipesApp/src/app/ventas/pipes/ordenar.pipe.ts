import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  //Exportamos el tipo de arreglo de Heroe
  //El valor que ponemos como prendeterminado en el de ordenarPor es para que el string se quede como es originalmente al menos que oprima un boton
  transform(heroes: Heroe[], ordenarPor: string = "sin valor"): Heroe[]{

    switch (ordenarPor){

      case "nombre":
        //Sort es una funcion que ordena los elementos conforme sus valores ASCCI. 
        //Va a revisar pares de heores que tenemos en el arreglo y al compararlos devolvera 1 o -1
        return heroes.sort( (a,b) => ( a.nombre > b.nombre) ? 1 : -1);
      
      case "vuela":
        return heroes.sort( (a,b) => ( a.vuela > b.vuela) ? -1 : 1);

      case "color":
        return heroes.sort( (a,b) => ( a.color > b.color) ? 1 : -1);

      default:
        return heroes;
    }

    // if( ordenarPor === "sin valor"){
    //   return heroes;
    // }else{
      
    // }
    // return heroes;
  }

}
