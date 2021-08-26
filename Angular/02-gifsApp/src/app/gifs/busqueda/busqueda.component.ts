import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  
  //En el viewchild pdemos buscar por directivas, elementos html o por REFERENCIA LOCAL (el elmento que tenemos en parentesis dentro de los atributos del input)
  //El ! es un operador que usamos para indicarle a Angular que no vamos a recibir un nulo
  //ELEMENT REF es generico por lo que debemos de especificar que es lo que queremos recibir
  //El HTMLInputElement es un tipo que indica que es lo que vamos a recibir del HTML
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  //para poder usar la funcion donde buscamos los Gifs tendremos que inyectar el Servicio
  //Ahora tenemos accesos a todos los metodos y propiedades
  constructor( private gifsService: GifsService ) {}

  //Una vez guardado el texto en la constante valor cambiamos el valor del txtBuscar un string vacio con la etiqueta .value
  buscar() {
    //Regresara el calor colocado en el Input
    const valor = this.txtBuscar.nativeElement.value;

    //Validaciones para poder evitar guardar elementos vacios
    if ( valor.trim().length === 0 )
    {
      return;
    }
    //Mandaremos el valor a la funcion de buscarGifs (del servicio)
    this.gifsService.buscarGifs( valor );
    //Cambiamos su valor
    this.txtBuscar.nativeElement.value = '';
  }

}
