import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';

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

  login(){
    //Antes de que el observable llegue a el suscribe pasa por el pipe  y manda una señal
    return this.http.get<Auth>(`${this.urlLocal}/usuarios/1`)
               .pipe(
                  tap( auth => this._auth = auth)
               )

                //Lo que genera el tap es el paso intermedoio para poder hacer algo mas antes de por haer lo del susv¿cribe
               ;
  }
}
