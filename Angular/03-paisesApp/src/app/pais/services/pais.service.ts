import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  //Base de la URL que se llamará
  private apiUrl: string = "https://restcountries.eu/rest/v2"

  get httpParams (){
    return new HttpParams().set("fields", "name;capital;alpha2Code;flag;population");
  }

  //Las peticiones se haran por Https
  constructor(private http:HttpClient) { }
  //La especficacion del tipo de Observable se optiene apartir de QuickType
  //Todo eso se maneja como una interface

///---------------------EL PAIS-------------------///
  buscarPais(termino: string): Observable<Country[]>{ 

    //Contruimos los terminos de la Url
    const url = `${this.apiUrl}/name/${termino}`;
    
    //No usamos el suscibre porque queremos retornar la Url a quien pidio la funciom
    return this.http.get<Country[]>(url, {params: this.httpParams});

  }
///---------------------LA CAPITAL-------------------///
  buscarCapital(termino: string): Observable<Country[]>{ 

    //Contruimos los terminos de la Url
    const url = `${this.apiUrl}/capital/${termino}`;
    
    //No usamos el suscibre porque queremos retornar la Url a quien pidio la funciom
    return this.http.get<Country[]>(url, {params: this.httpParams});

  }

///-------------------TACOS DE BRISKET----------------///
  getPaisPorAlpha(id: string): Observable<Country>{ 

    //Contruimos los terminos de la Url
    const url = `${this.apiUrl}/alpha/${ id }`;
    
    //No usamos el suscibre porque queremos retornar la Url a quien pidio la funciom
    return this.http.get<Country>(url);

  }
///----------------BUSCAR POR REGION -----------------///

  buscarRegion(region: string): Observable<Country[]>{
    //Contruimos los terminos de la Url
    const url = `${this.apiUrl}/region/${region}`;
    
    //No usamos el suscibre porque queremos retornar la Url a quien pidio la funciom
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
