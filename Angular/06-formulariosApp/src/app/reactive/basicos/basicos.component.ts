import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // ----------Form Control & Form Group-----------//
  // miFormulario: FormGroup = new FormGroup({
  //   "nombre": new FormControl ("RTX 4080ti"),
  //   "precio": new FormControl (5000),
  //   "existencias": new FormControl (5)
  // })

  //----------------Form Builder------------------//
  // DENTRO DEL ARREGLO:
  //   Nombre prestablecido, Validadores Sincronos (Que se pueden ejecutar en vivo), Validadores Asincronos (llaman funciones que reisan de manera asincrona)

  miFormulario: FormGroup = this.fb.group({
    nombre:[, [Validators.required, Validators.minLength(3)], ],
    precio: [, [Validators.required, Validators.min(0)] ],
    existencias: [, [Validators.required, Validators.min(0)]]

  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre: "RTX 8040",
      precio: 1600
    })
  }


  campoEsValido(campo:  string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
