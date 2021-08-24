import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre:"",
    poder: 0
  }
  // El Ouput es utilizando cuando tenemos un componente hijo que necesita emirti un valor al padre
  //Tenemos que agregar el tipo de dato que estara emitiendo  SIEMPRE DEBEMOS AGREGARLO
  // @Output() onNuevoPersonaje: EventEmitter <Personaje>= new EventEmitter();

  //importamos el servicio
  constructor(private dbzService: DbzService){

  }

  agregar (){
    //Al recibir el event El event.preventDefault(); evita el que se refrezque la pagina por defecto al mandar el formuario
    //trim wuita los espacion en blanco que pueden mandar
    //Si al checar la lpongitud, resulta igual a 0, hacemos un return y salimos del metodo
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    //Ya con el servicio importado podemos agregar el personaje
    this.dbzService.agregarPersonaje(this.nuevo);
    //Unicamente podemos mandar del tipo personaje
    //Emitimos el valor que recibimos al main page
    // this.onNuevoPersonaje.emit(this.nuevo);
    //Agregamos nuevo al aerreglo de personajes
    this.nuevo= {
      nombre:"",
      poder: 0
    }
  }
}
