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

  //Declaramos los tipos
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

}
