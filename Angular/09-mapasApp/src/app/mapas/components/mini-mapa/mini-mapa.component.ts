import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles:[
    `
      div{
        width: 100%;
        height:150px;
        margin: 0px;
      }
    `
  ]
})
export class MiniMapaComponent implements AfterViewInit {

  @Input() lngLat:[number, number] = [0,0];
  @ViewChild("mapa") divMapa!:ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    //Dedicmos en q uie parte de la pagina vamos a rednereizar el mapa
    const mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      
      //Establecemos las coordenadas de donde siempre se va a abrir el mapa 
      //Primero la longitud y luego la latitud
      center: this.lngLat,
      zoom: 15,
      interactive: false
    });

    new mapboxgl.Marker()
      .setLngLat(this.lngLat)
      .addTo(mapa);
  }
}
