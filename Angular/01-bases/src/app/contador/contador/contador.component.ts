import {Component} from "@angular/core";

@Component({
    selector:"app-contador",
    template: `

       <!-- Con las dobles llaves podemos retomar condigo de TypeScrpt directamente en el html-->
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <!-- Usaremos el evento Click del button, los eventos se definidos por parentesis y dentro el evento-->
        <!-- Dentro de las comillas ponemos la expresion en javaScript que queremos que haga el evento -->

        <!-- Dentro del template "HTML" no se recomienda usar mucha logica, debido a que hay varias limitaciones -->
        <button (click)="acumular(+base);"> + {{base}}</button>

        <span> {{ numero }} </span>

        <button (click)="acumular(-1*base);"> - {{base}}</button>
    
    `
})
export class ContadorComponent{
    titulo:string = 'Contador App';
    numero:number = 10;
    base: number = 5;
    //Buscando hacer mas ligera la logica en el tamplate creamos...
    acumular(valor:number){
        //Usamos this.numero para poder especificar que usamos el numero de la clase
        this.numero += valor;
    }
}
