import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  //funciones para podetr hacer las validfacionbes de los formularios
    //añadimos  dentro del arreglo todas las validaciones que queremos que se le agregen  
  miFormulario: FormGroup = this.fb.group({

    nombre:[, [Validators.required, Validators.minLength(4)], ],
    favoritos: this.fb.array ( [
        ["Metal Gear", Validators.required],
        ["Death Stranding", Validators.required]
    ] , Validators.required)

  });

  nuevoFavorito: FormControl = this.fb.control("", Validators.required );
  
  get favoritosArray() {
    return this.miFormulario.get ("favoritos") as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  campoEsValido(campo:  string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  agregarFavorito(){

    if (this.nuevoFavorito.invalid){
      return;
    }

     this.favoritosArray.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    //this.favoritosArray.push(this.fb.control(this.nuevoFavorito.value, Validators.required));

    this.nuevoFavorito.reset();
  }

  borrar( i:number){
    this.favoritosArray.removeAt(i);
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
  }

}
