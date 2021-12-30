import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//Debemos de inplementear el AsyncValidator (para poder hacer que las validaciones sean asincronas)
export class EmailValidatorService implements AsyncValidator{
  //Para poder hacer las validaciones de email usamos un servicio porque necesitamos inyectar el httpclient
  constructor( private http: HttpClient) { }
  
  // Debemos de implementar todo lo necesario para el asyncValidator
  //Vamos a recibir el control donde ya paso por las validaciones anteriores (como en la validacion manual), TODA LA INFORMACION DEL CAMPO
  //Regresara un observable con un ValidarionErrors o nulo (si regresa un objeto es que hay un error, si es un nulo es que no hay ningun error)

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    
    //Tenemos que hacer la peticion
    const email = control.value;
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
               .pipe(
                 delay(3000),
                 map( resp => {
                  //Con "map" cambiamos la respuesta del observable a un arreglom, de tak forma que podemos recorrerlo y contarlo
                  //Ternario para regresar un null o un objeto
                    
                    return (resp.length === 0)
                    ? null
                    : {emailYaExiste: true}
                 })
                )
  }
}
