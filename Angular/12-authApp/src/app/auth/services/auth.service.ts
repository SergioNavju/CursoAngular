import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';


import { environment } from '../../../environments/environment';
import { AuthResponce, Usuario } from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(){
    return {...this._usuario};
  }

  //Inyectamos el servicio de consultas Http
  constructor(private http: HttpClient) { 
  }

  registro(name:string, email: string, password: string){
    const url = `${ this.baseUrl }/auth/new`;
    const body = {name, email, password};

    return this.http.post<AuthResponce>( url, body)
    .pipe(
      tap(resp =>{
        if(resp.ok){
          //Guardamos el token
          localStorage.setItem('token',resp.token!)
        }
      }),
      map( resp => resp.ok),
      catchError(err =>of(err.error.msg))
    )
  }

  //--------------------------------------------------------//
  login(email: string, password: string){

    const url = `${ this.baseUrl }/auth`;
    const body = {email, password};

    //Modificaremos la respuesta que damos usando map, solo apra que regresecmo el ok y el mensaje de error
    //Haremos que el error que se genera en el login al no mandar datos correctos solo se mande un false (para eso el catchError)
    //No podemos solo mandar un valor booleando como un false, tenemos que mandar un opbserbabvle para que alguiens e pueda suscribir, asi que usamo of de rxjs para poder trnaformarlo a unnobservable
    return this.http.post<AuthResponce>( url, body)
    .pipe(
      tap(resp =>{
        if(resp.ok){
          //Guardamos el token
          localStorage.setItem('token',resp.token!)
        }
      }),
      map( resp => resp.ok),
      catchError(err =>of(err.error.msg))
    )
  }

  validarToken(){

    //Abrimos el header 
    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')
    //Convertimos a un observable booleano para poder usar el guard
    return this.http.get<AuthResponce>(url, {headers})
      .pipe(
        map( resp => {
           //Guardamos el token
          localStorage.setItem('token',resp.token!);
          this._usuario={
            name: resp.name!,
            uid:resp.uid!,
            email:resp.email!
          }

          return resp.ok;
        }),
        catchError(err =>of(false))
      )
  }

  logout(){
    localStorage.clear();
  }

}
