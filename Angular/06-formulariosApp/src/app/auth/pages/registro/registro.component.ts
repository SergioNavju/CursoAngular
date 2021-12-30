import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Importaciones del validaciones.ts
import { emailPattern, nombreApellidoPattern, noPuedeSerWasabi } from 'src/app/shared/validator/validaciones';

import { ValidatorService } from '../../../shared/validator/validator.service';

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
    //Separamos con una coma el segundo vbalidador porque es una valudacion sincrona
        
    //Para el nombre
    //Con Pattern mandamnos una string op un RegExp
    nombre: ["",[Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern)]],

    //Para el correo
    email: ["",[Validators.required, Validators.pattern(this.validatorService.emailPattern)]],

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
  constructor( private fb:FormBuilder,
                private validatorService: ValidatorService) { }

  //Agregamos los parametros establecidos
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Sergio Navarro',
      email:'sergio@gmail.com',
      username: 'Link69'
    })
  }

  //Validaciones para los Warnings
  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  //Acciones para cuando se mande el formulario
  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
