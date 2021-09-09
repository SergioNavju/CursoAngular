import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // nombre: string= "SerGiO NaVarRo";
  // valor: number = 10000;
  // obj = {
  //   nombre: "Sergio"

  // }

  // mostrarNombre(){
  //   console.log(this.nombre);
  //   console.log(this.valor);
  // }

  constructor(private primengConfig: PrimeNGConfig){
  }
  
  ngOnInit(){
    this.primengConfig.ripple = true;
  }

}
