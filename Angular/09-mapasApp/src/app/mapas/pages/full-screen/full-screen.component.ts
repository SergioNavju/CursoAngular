import { Component, OnInit } from '@angular/core';

//Importamos de manera global
//Antes debismo de anadir la parte del tipado de ts
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [

    `
    #mapa{
      height: 100%;
      weight: 100%;
    }
    `

  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //Dedicmos en q uie parte de la pagina vamos a rednereizar el mapa
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      
      //Establecemos las coordenadas de donde siempre se va a abrir el mapa 
      //Primero la longitud y luego la latitud
      center:[-99.15610260664361, 19.372248349887656],
      zoom: 16,

    });

  }

}
