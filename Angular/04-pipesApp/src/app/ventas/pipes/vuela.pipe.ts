//---Tenemos que importar el pipe para que funcione---//
import { Pipe, PipeTransform } from "@angular/core";

//Necesitamos un decorador en el que le indiquemmos 
@Pipe({
    //El nombre que declaremos aquí es nombre en el que nos referiremos al pipe
    name: 'vuela'
})
//La sigueinte clase equivale a la funcion que se ejectura siempre que usemos el pipe
export class VuelaPipe implements PipeTransform{

    //String es el tipo de dato que estaremos retornando
    //Tenemos que indicar el tipo de dato que vamos a recibir, tanto los normales como los opcionales
    transform(valor: boolean):string{

        return (valor) ? "vuela" : "no vuela";
    }


}