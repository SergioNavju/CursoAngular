import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/heores.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  //Esto es para todas las imagenes que si existan 
  transform(heroe: Heroe): string {

    //-----PIPES PUROS Y PECADORES-----//
    //Los pipes se van a vovler a cargar siempre que cambia alguno de los arguentos que recibe, en ese caso es un pipe puro. Invocando al transform solo cuadno sea necesario
    //En el caso de las imagenes que estamos manejanddo, no se cambia al menos que recarges por que como tal el objeto no cambio, sigue suendo en mismo espacio de memoria ¿.

    //Di queremos que el pipe se dispare siempre que angular detecte un cambio debemos de ponerlo en pure: false y de esta forma se diaparar muchas veces (consume muchos recursos)


    //Para cuando no tenemos un id (al momento de crear un heroe)
    if( !heroe.id && !heroe.alt_img){
      return "assets/no-image.png";
    }else if ( heroe.alt_img){
      return heroe.alt_img;
    }else{
      return `assets/heroes/${heroe.id}.jpg`;

    }

  }



}
