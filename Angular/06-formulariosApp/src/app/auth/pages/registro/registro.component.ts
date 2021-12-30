import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Importaciones del validaciones.ts
import { emailPattern, nombreApellidoPattern, noPuedeSerWasabi } from 'src/app/shared/validator/validaciones';

import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  //-----Creamos las validaciones-----//

  //Importamos las regex de un archivo expecifoico de validaciones 
    // nombreApellidoPattern: string= '([a-zA-Z]+) ([a-zA-Z]+)';
    // emailPattern: string= "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    // noPuedeSerWasabi(control:FormControl){
    //   const valor:string = control.value?.trim().toLowerCase();
    //   if (valor === 'wasabi'){
    //     return {
    //       noManchesEsWasabi: true
    //     }
    //   }
    //   else{
    //     return null;
    //   }
    // }

  miFormulario: FormGroup = this.fb.group({
    //El primer parametro es el valor del campo
    //El segundo parametro son las validaciones sincronas
    //El tecer parametro son las validaciones asincronas (deben de regresar promesas o un observable)

    //Separamos con una coma el segundo vbalidador porque es una valudacion sincrona
        
    //Para el nombre
    //Con Pattern mandamnos una string op un RegExp
    nombre: ["",[Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern)]],

    //Para el correo
    email: ["",[Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],

    //Para el username
    username: ["",[Validators.required, this.validatorService.noPuedeSerWasabi]],

    //Para la password
    password: ["",[Validators.required, Validators.minLength(6) ]],

    //Para la pasword 2
    password2: ["",[Validators.required ]]


  },{
    //Aqui se van a definir las validaciones que se haran al formulari en general
    validators:[this.validatorService.camposIguales("password", "password2")]
  })

  //Agregamos  el FromBuilder
  //debemos de inyectar el EmailValidator
  constructor( private fb:FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator:EmailValidatorService) { }

  //Agregamos los parametros establecidos
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Sergio Navarro',
      email:'test1@test.com',
      username: 'Link69',
      password: '123456',
      password2: '123456' 
    })
  }

  //---Validaciones para los Warnings---//
  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  //Warnings de correo

  //Usamos un Get porque es algo que se vuelve a ejecutar siempre que haya un cambio en el formulario
  get emailErrorMsg():string{

    const errors = this.miFormulario.get("email")?.errors;
    //Validaciones para poder elegir el tipo de error
    if(errors?.required){
      return 'Email es obligatorio';
    }
    else if (errors?.pattern){
      return 'El correo no sigue la sintaxis correcta';
    }
    else if (errors?.emailYaExiste){
      return 'El email ya fue registrado';
    }

    return "";
  }

  // emailRequired(){
  //   //Cuando haya el error de required y se toque salta el error
  //   return this.miFormulario.get("email")?.errors?.required && this.miFormulario.get("email")?.touched;
  // }

  // emailFormato(){
  //   //Cuando haya el error de pattern y se toque salta el error
  //   return this.miFormulario.get("email")?.errors?.pattern && this.miFormulario.get("email")?.touched;
  // }

  // emailYaExiste(){
  //   //Cuando haya el error de emailYaExiste y se toque salta el error
  //   return this.miFormulario.get("email")?.errors?.emailYaExiste && this.miFormulario.get("email")?.touched;
  // }

  //Acciones para cuando se mande el formulario
  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
