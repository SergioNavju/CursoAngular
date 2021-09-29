//---Tenemos que importar el pipe para que funcione---//
import { Pipe, PipeTransform } from "@angular/core";

//Necesitamos un decorador en el que le indiquemmos 
@Pipe({
    //El nombre que declaremos aquí es nombre en el que nos referiremos al pipe
    name: 'mayusculas'
})
//La sigueinte clase equivale a la funcion que se ejectura siempre que usemos el pipe
export class MayusculasPipe implements PipeTransform{

    //String es el tipo de dato que estaremos retornando
    //Tenemos que indicar el tipo de dato que vamos a recibir, tanto los normales como los opcionales
    transform(value:string, enMayusculas: boolean = true):string{

        //Con un if Simple

        // if(enMayusculas){
        //     return value.toUpperCase();
        // }
        // else{
        //     return value.toLowerCase();
        // }

        //Con un ternario

        return (enMayusculas) ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
    }


}