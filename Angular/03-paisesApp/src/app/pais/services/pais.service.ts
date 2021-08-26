import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  //Base de la URL que se llamará
  private apiUrl: string = "https://restcountries.eu/rest/v2"

  //Las peticiones se haran por Https
  constructor(private http:HttpClient) { }
  //La especficacion del tipo de Observable se optiene apartir de QuickType
  //Todo eso se maneja como una interface

  buscarPais(termino: string): Observable<Country[]>{ 

    //Contruimos los terminos de la Url
    const url = `${this.apiUrl}/name/${termino}`;
    
    //No usamos el suscibre porque queremos retornar la Url a quien pidio la funciom
    return this.http.get<Country[]>(url);

  }

  buscarCapital(termino: string): Observable<Country[]>{ 

    //Contruimos los terminos de la Url
    const url = `${this.apiUrl}/capital/${termino}`;
    
    //No usamos el suscibre porque queremos retornar la Url a quien pidio la funciom
    return this.http.get<Country[]>(url);

  }

  getPaisPorAlpha(id: string): Observable<Country>{ 

    //Contruimos los terminos de la Url
    const url = `${this.apiUrl}/alpha/${ id }`;
    
    //No usamos el suscibre porque queremos retornar la Url a quien pidio la funciom
    return this.http.get<Country>(url);

  }

}
