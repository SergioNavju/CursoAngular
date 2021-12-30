import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string= '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string= "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }
  
// Seguimos usando el metodo que usabamos en el registro.component pero agragamos el ValidationErrors
  noPuedeSerWasabi(control:FormControl): ValidationErrors | null {
    const valor:string = control.value?.trim().toLowerCase();
    if (valor === 'wasabi'){
      return {
        noManchesEsWasabi: true
      }
    }
    else{
      return null;
    }
  }

  //Creamos la validacion para poder comparar las contrasenas 
  //Debido a qiue debemos de usar como parametros las validaciones que hacemos en el registro.component
  //y no podemos ejectucar una funcion en esas validaciones, debemos de reghresar una funcion 

  camposIguales(campo1:string, campo2:string){
    
    //regresamos una funcion
    return(formGroup: AbstractControl): ValidationErrors | null =>{

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2){
        //Para hacer que la validacion no e aunicamente de que es required esa partte del formulario
        formGroup.get(campo2)?.setErrors({noIguales:true})

        return{ noIguales: true}
      }
      
      //Como solo es required y ya sabemos que son iguales no hay ninugn problema en quitarle los errores
      formGroup.get(campo2)?.setErrors(null);

      return null;
    }
  }


}







