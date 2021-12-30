import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  //-----Creamos las validaciones-----//

  // TODO: Temporal
  //Hacermos una RegExp
  nombreApellidoPattern: string= '([a-zA-Z]+) ([a-zA-Z]+)';

  miFormulario: FormGroup = this.fb.group({
    //Separamos con una coma el segundo vbalidador porque es una valudacion sincrona
    //Con Pattern mandamnos una string op un RegExp
    nombre: ["",[Validators.required, Validators.pattern(this.nombreApellidoPattern)]]
  })

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
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
