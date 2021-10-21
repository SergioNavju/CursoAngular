import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlLocal: string = environment.urlLocal;
  //Siempre que recargemos la pagina se perdara eso porque está en memoria 
  private _auth: Auth | undefined;

  //Lo restruturamos pero no poder afectarlo accidentalmente 
  get auth(): Auth{
    return { ...this._auth! }
  }

  constructor( private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean>{
    //Verificamos si exite el id
    if(!localStorage.getItem("id")){
      //el of sirve para pdoer convertir a un observable el false 
      return of (false);
    }

    //De existir el id, tnemo que verificaar que sea el que esta en la base de datos
    //Hacemos la misma peticion pero para poder seguir con el tipado lo que tenemos que hacer es usar map y convertir lo que se regresa
    return this.http.get<Auth>(`${this.urlLocal}/usuarios/1`)
              .pipe(
                map( auth =>{ 
                  this._auth = auth;
                  return true;
                })
              );
  }

  login(){
    //Antes de que el observable llegue a el suscribe pasa por el pipe  y manda una señal
    return this.http.get<Auth>(`${this.urlLocal}/usuarios/1`)
               .pipe(
                  tap( auth => this._auth = auth),
                  //Guardamos en el localStotage el id del usurio simulando un token
                  tap( auth => localStorage.setItem("id",auth.id))
               );
                //Lo que genera el tap es el paso intermedoio para poder hacer algo mas antes de por haer lo del susv¿cribe
  }

  logout(){
    this._auth = undefined;
  }
}
