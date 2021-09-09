import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})

export class NoComunesComponent{

  //------------------------------------------------------------------------------------------------------//
  //i18nselect
  //Nos deja seleccionar entre varias opciones 
  nombre: string = "Sergio";
  genero: string = "masculino";
  //Para que el pipe pueda funcionar necesita de un mapa en el que le indiquemos las diferentes opciones
  invitacionMapa = {
    "masculino": "tenerlo",
    "femenino": "tenerla"
  }
  //-----------------------------------------------------------------------------------------------------//
  //i18nplural
  //Nos deja verificar la cantidad de elementos y dar una respuesta personalizada 
  clientes: string[] = ["Maria","Fernando", "Eduardo", "Sergio"];
  //Antes de los dos puntos nosotros verificamos la longitud de clientes y la comparamos con 0
  clientesmapa={
    "=0": "no tenemos ningún cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    //Indicamos con other el else que se aplicara cuando no suceda nada de lo anterior
    "other": "tenemos # clientes esperando.",
  }

  cambiarCliente(){
    this.nombre = "Melisa";
    this.genero = "femenino";
  }

  borrarCliente(){
    this.clientes.pop();
  }
  //------------------------------------------------------------------------------------------------------//
  //Slice
  //Puede funcionar tatno a arreglos como a cadenas [al ser arreglos de caracteres]

  //------------------------------------------------------------------------------------------------------//
  // KeyValue Pipe
  //Cuando buscamos imprimir las propiedades del objeto como si fuera un arreglo
  //Hay que recoradar que un objeto no se puede imprimir tal cual como si fuera un string (solo iprime Object:OBJECT)
  //Es similar al pipe json en donde podemos ver cual es la llave y el item en el objeto

  persona = {
    nombre: "Fernando",
    edad: 35,
    direccion: "Ottawa, Canadá"
  }

  //------------------------------------------------------------------------------------------------------//
  //JsonPipe
  //El uso mas comun para este pipe es en la depuracion 
  heroes = [
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Robin",
      vuela: false
    },
    {
      nombre: "Aquaman",
      vuela: false
    }

  ]

  //------------------------------------------------------------------------------------------------------//
  //Async Pipe
  //Este Pipe funciona solo con promesas o observables

  ////-----------OBSERVABLE---------///
  //Los observables emiten valores numericos cada cierto tiempo
  miObservable = interval(1000); //Sus valores numericos son de: 0,1,2,3,4,5,6,7...
  //Se puede impimir los valores del observable en la consola atraves de un suscribe
  //Nosotros podemos imprimir esos valores numericos con el Pipe, async se suscribe internamente al observable e imprime sus emicions

  ////-----------PROMESA------------////

  miPromesa= new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve("Promesa Resuelta");
    },3500);
  });



}

