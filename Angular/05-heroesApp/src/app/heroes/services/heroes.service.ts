//Importaremos el modulo en el app modulo porque las peticiones se hacen de manera global
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interface/heores.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private urlLocal: string = environment.urlLocal;

  //Declaramos los tipos par pdoer hacer las peticiones a la base de datos
  constructor( private http: HttpClient) { }

  //Declaramos los metodos que nos devolveran los heroes
  //Una vez que tenemos la interface que usaremos para poder describir el tipo de dato que estara regresando, la agregamos e indicamos que son varios con el []

  //Metodo para regresar el arreglo con todos los objetos que hay
  //Las variables se tienen en el enviroment
  getHeroes(): Observable<Heroe[]>{
    return this.http.get <Heroe[]>(`${this.urlLocal}/heroes`);
  }

  //Metodo para poder obtener la ruta del heroe
  getHeroePorId( id: string): Observable<Heroe>{
    return this.http.get <Heroe>(`${this.urlLocal}/heroes/${id}`);
  }
  //Todo esto se implementara en la parte de listados

  //Metodo par pdoer obtener los resultados de busqueda con algun termino de busqueda
  getSugerencias (termino: string): Observable <Heroe[]> {
    return this.http.get<Heroe[]>(`${this.urlLocal}/heroes?q=${ termino }&_limit=6`)
  } 

  //Metodo para poder agregar superheroes a la base de datos 
  //Basta con una petición POST a la url donde se encuentra la base de datos del db.json
  //El heroe se mandara como urlencoded
  agregarHeroe(heroe:Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.urlLocal}/heroes`, heroe);
  }

  //Creamos un metodo para poder actualizar el valor de un heroe en lugar de crearlo. Utilizamos Put
  actualizarHeroe(heroe:Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.urlLocal}/heroes/${ heroe.id }`,heroe);
  }

  //Metodo para poder borrar heroe 
  borrarHeroe( id: string): Observable<any>{
    return this.http.delete<any>(`${this.urlLocal}/heroes/${id}`);
  }

}
