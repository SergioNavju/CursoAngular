import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  //Los servicios pueden definirse en el momento en que se ahga el boundle de la aplicación, indicano que abarcaran de forma global sin importar donde esten
  //Ya no tenemos que definirlo en el module como provider
  providedIn: 'root'
})

export class GifsService {

  // Guardamos la API
  private apiKey: string = '3SVw1OidxOj4DJrSlviml9vbEHObvwBT';
  //Guardamos la dirección 
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  //Crearemos un historial 
  private _historial: string[] = [];
  //El tipo especificado en la interface de quicktype
  public resultados: Gif[] = [];

  //Rompemos la referencia con el private 
  get historial() {

    return [...this._historial];
  }

  //Inyectamos los servicios de HTTP
  //Usara observables

  //El constructor del servicio solo se ejecuta una vez
  constructor( private http: HttpClient) {

    //Usamos parse para poder convertir de Srting a Objeto 
    //De regresar un null creamos un arreglo vacio
    this._historial= JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados= JSON.parse(localStorage.getItem('resultados')!) || [];
  

    // if( localStorage.getItem('historial') ){
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );
    // }

  }
  //para poder usar la funcion tendremos que inyectarla al component ts
  //Recibimos el query que es el termino a buscar
  buscarGifs( query: string = '' ) {

    //Convertimos todo a minuculas
    query = query.trim().toLocaleLowerCase();
    
    //Validaciones para evitar que repitamos busquedass
    //El includes se refier a verificar si tiene o no 
    if( !this._historial.includes(query) ) {

      //Lo incertamos al inicio del historial por eso el unshift 
      this._historial.unshift(query);
      
      // Cortamos el arreglo principal para solo poder almacenar del primero al 10
      this._historial = this._historial.splice(0,10);
      //LocalStorage es propio de JavaScript
      //Usamos JSON.stringify para poder convertir el objeto a string 
      //Usamos el "historial" como primer paramentro para poder derile como lo debe de guardar en el localStorage
      localStorage.setItem('historial', JSON.stringify( this._historial ) );
    }
    //Buscamos poder construir todo los parametros de una manera más sencilla
    //Primero podemoa la cadena y luego el valor que var a ir en ese parametro
    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query );

    //Usamos la propiedad http
    //El subscribe se usa cuando tenemos que la resolucion de la liga
    //Le decimos como debe de lucir la informacion que debe de traer el get
    this.http.get <SearchGifsResponse> (`${ this.servicioUrl }/search`, { params } )
      .subscribe( (resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify( this.resultados )  );
      });

  }


}
