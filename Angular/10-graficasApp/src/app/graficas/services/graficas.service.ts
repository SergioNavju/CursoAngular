import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData() {
    return this.getUsuariosRedesSociales()
        .pipe(
          map( data => {
            //Los separamos en dos arreglos donde tgenemos el objeto y su  valor 
            const labels = Object.keys( data );
            const values = Object.values( data );
            return { labels, values };
          })
        )
  }

}
