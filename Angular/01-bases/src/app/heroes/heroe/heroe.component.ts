//Primero debes crear el par de archivos component.ts y component.html
//El html maneja el maquetado y el ts la logica
//Cuando se crea una clase que se debe exportar y un componente se debde de importar del @angular/core
//El componente debe de tener un selector con la palabra "app-" para que se entienda que es un componente personalizado y un templateUrl donde indiquermos la ruta del html
//Tenemos que abrir el modulo donde exportamos el coponente 
//Podremos usar la etiqueta con el nombre del selector que usammos en el componnente
import { Component } from "@angular/core";

@Component({
    //Usualemente se usa el mismo nombre que el componenete, pero sin la palabra component
    selector: "app-heroe",
    templateUrl: "heroe.component.html"

})
export class HeroeComponent{

    nombre: string = "Ironman";
    edad: number = 45 
    //LOS GET son una propiedad que cuando se llame sera procesada, pero se vera como nombre y edad
    //Son Subrutinas
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre():void{
        this.nombre = "Spiderman";
    }

    cambiarEdad():void{
        this.edad = 30;
    }

}