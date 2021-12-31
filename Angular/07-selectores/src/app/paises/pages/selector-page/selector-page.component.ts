import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {switchMap, tap} from 'rxjs/operators';

import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  //Creamos las primeras validaciones
  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['',Validators.required],
    frontera: ['',Validators.required]

  })

  //Llenamos los Selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];

  //UI
  cargando: boolean = false;

  constructor( private fb:FormBuilder,
               private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;
  
    //---Al cambiar la region---//

    //---SIN SWITCH MAP---//
      // //Con el Get obtenemos la region que hayamos seleccionado
      // //Nos suscribimos a los cambios y lkos imprimimos

      // //Utilizamos la funcion de getpasies porregion (la declaramo en paises.service) 
      // //mandamos la region que obtubimos con el get
      // //Nos suscribimos y rellenamos el arreglo definido en la linea 21 con los resultados
      // this.miFormulario.get('region')?.valueChanges
      //     .subscribe(region =>{
      //       console.log(region)

      //       this.paisesService.getPaisesPorRegion(region)
      //           .subscribe(paises => {
      //             console.log(paises)
      //             this.paises = paises;
      //           })
      //     })


    //--- CON SWITCH MAP ---//
    this.miFormulario.get('region')?.valueChanges
        .pipe (
          //El operador tap solo sera el punto medio desde el cual siempre antes de que se obtengan los neuvos paises se va a resetear lo paises anteriores
          tap((_) =>{
            this.miFormulario.get('pais')?.reset('');
            this.cargando = true;
          }),
          //El switchmap lo que hara es cambiar el valor que regresa el observable por otro observable que directamente nos dara el valor de los paises 
          switchMap ( region => this.paisesService.getPaisesPorRegion(region))
        )
        .subscribe (paises => {
          this.paises = paises;
          this.cargando = false;

        })

    //--- Al cambiar el pais ---//
    this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap((_) =>{
            this.miFormulario.get('frontera')?.reset('');
            this.cargando = true;

          }),
          switchMap(codigo => this.paisesService.getPaisesPorCodigo(codigo)),
          switchMap(pais => this.paisesService.getPaisesPorCodigos(pais?.borders!))
        )
        .subscribe (paises => {
          // this.fronteras = pais?.borders || [];
          this.fronteras = paises;
          this.cargando = false;

        })
  }

  guardar(){
    console.log(this.miFormulario.value)
  }

}
