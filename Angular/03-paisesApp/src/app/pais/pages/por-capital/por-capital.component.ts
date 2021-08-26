import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  termino:string= "";
  //Propiedad de control para poder concoer el estado de la aplicación
  hayError: boolean = false;

  //No olvidar crear la propiedad con el tipo de la iterface que traemos de QuickType
  //Propiedad que usaremos para poder formar la listas de paises y poder imprimirlas 
  paises: Country[] =[];

  //Inyectamos el servicio para poder usar todos sus terminos
  constructor( private paisService: PaisService) {
  }

  buscar( termino: string){
    //En cuanto se haga la paticion se elimina el error
    this.hayError= false;
    //El termino que se tiene como parametro se le da al que tnemos definido en la clase
    this.termino = termino;
     //Para que un Observable se pueda usar debemos tener por lo menos un SUbscribe
     //Usamos los parametros que tiene eel Suscribe para pdoer tener un mayor control sobre aquello que recibimos de regreso
     this.paisService.buscarCapital(termino)
      .subscribe( (paises) =>{
        this.paises = paises;

      }, (err)=>{
        this.hayError= true;
        this.paises=[];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }

}
