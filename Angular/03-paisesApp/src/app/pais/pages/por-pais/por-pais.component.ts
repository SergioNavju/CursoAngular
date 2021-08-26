import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino:string= "";
  //Propiedad de control para poder concoer el estado de la aplicación
  hayError: boolean = false;

  //No olvidar crear la propiedad con el tipo de la iterface que traemos de QuickType
  //Propiedad que usaremos para poder formar la listas de paises y poder imprimirlas 
  paises: Country[] =[];

  //Propiedad que controlara los paises segeridos
  paisesSugeridos: Country[] =[];
  mostrarSugerencias: boolean = false;

  //Inyectamos el servicio para poder usar todos sus terminos
  constructor( private paisService: PaisService) {
  }

  //Metodo mencionado en le Html
  buscar( termino: string){
    this.mostrarSugerencias= false;
    //En cuanto se haga la paticion se elimina el error
    this.hayError= false;
    //El termino que se tiene como parametro se le da al que tnemos definido en la clase
    this.termino = termino;
     //Para que un Observable se pueda usar debemos tener por lo menos un SUbscribe
     //Usamos los parametros que tiene eel Suscribe para pdoer tener un mayor control sobre aquello que recibimos de regreso
     this.paisService.buscarPais(termino)
      .subscribe( (paises) =>{
        console.log(paises);
        this.paises = paises;

      }, (err)=>{
        this.hayError= true;
        this.paises=[];
      });
  }

 //Siempre que pasen 300 milesimas de segundo despuesd e que termine de escirbir se emitira el evento y se emitiran las sugerencias ademas de eliminr el error
  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos=[]
    );
  }
  
  buscarSugerido(termino:string){
    this.buscar(termino);
    
  }
}
