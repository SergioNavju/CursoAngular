import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //Usamos la etiqueta de @viewchild buscando encontrar un elemento en especifico
  @ViewChild("miFormulario") miFormulario!: NgForm;


  //Primeros valores con los que se mostrara el formulario
  initForm = {
    producto:"RTX 40890I",
    precio: 100,
    existencias: 2
  }

  constructor() { }

  ngOnInit(): void {
  }

  //Validaciones
  nombreValido(): boolean{
    return this.miFormulario?.controls.producto?.invalid  
           && this.miFormulario?.controls.producto?.touched
  }

  precioValido(): boolean{
    return this.miFormulario?.controls.precio?.value<0  
           && this.miFormulario?.controls.precio?.touched
  }

  guardar( ){
    // console.log(this.miFormulario.value);
    //Para pdoer reiniciar un formulario después de mandarlo
    //Tambien podemos mandar los valores con los que queremos que se regrese el formulario
    this.miFormulario.resetForm({
      producto: "Cosa",
      precio:0,
      existencias:0
    });
  }

}
