//Los servicios se manejan a la altura que queramos, este se maneja al nivel de dbz
//Los servicios son una clase abstracta el a que se coloca la informaci[on y los metodos para interactuar conf uentes externas y manipular el estado de la informacion
//Si el main page hicera modificaciones al servicio entocnes todos los compnentes hijos recibiran esa misma infromacion0 actulizazada
//Es un lugar centralizado de la información
import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

//Con ese decorador solo indicamos que se va a poder inyectar la clase 
//La primera instacnia se creara cuando se utilice por primera vez el servicio

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: "Goku",
          poder: 1500
        },
        {
          nombre: "Vegeta",
          poder: 7500 
        }
    ];
    
    get personajes(): Personaje[]{
      //Usamos el operador spread, separa cad auno de los elementos independientes que tiene ese arreglo y crea uno nuevo 
      return [...this._personajes];
    }

    constructor(){
    }

    agregarPersonaje(personaje: Personaje){
      this._personajes.push(personaje);
    }
}