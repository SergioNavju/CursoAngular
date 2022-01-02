import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container{
      height: 100%;
      weight: 100%;
    }
    .list-group{
      position: fixed;
      top: 20px;
      right:20px;
      z-index: 99999;
    }
    li{
      cursor: pointer;
    }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  

  //Para poder ver la referencia local del html 
  @ViewChild("mapa") divMap!: ElementRef;

  //Hacemos el .Map por que debemos de importar toda la libereria 
  //Usamoa el ! porque debemos de inicisalizar el objeto, sin embargo, aunque se propone usar el constructor pero como no se carga de maner inmediata el mapa no podemos mencionar ese objeto ern el construcor
  mapa!: mapboxgl.Map;

  //Valor del zoom original
  zoomLevel: number = 15;

  center: [number,number] = [-99.15610260664361, 19.372248349887656];


  constructor() { }
  ngAfterViewInit(): void {
    //Dedicmos en q uie parte de la pagina vamos a rednereizar el mapa
    this.mapa = new mapboxgl.Map({

      //Usamos el .nativeElemnent para mandar el objeto html como tal y no solo la referencia de que te da el ElementRef
      container: this.divMap.nativeElement,

      style: 'mapbox://styles/mapbox/streets-v11',
      
      //Establecemos las coordenadas de donde siempre se va a abrir el mapa 
      //Primero la longitud y luego la latitud
      center:this.center,
      zoom: this.zoomLevel
    });

    //Creamos un marcador
    //Podemos personalizar el logo
    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = "Hola Mundo";

    //En donde queremosn ponerlo (coordenadas) y en que mapa queremos ponerlo
    // const marker = new mapboxgl.Marker().
    //   setLngLat(this.center).
    //   addTo(this.mapa)

  }

  agregarMarkador(){
    
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarkador = new mapboxgl.Marker({
      draggable: true,
      color
    }).
        setLngLat(this.center).
        addTo(this.mapa);
  }

  irMarkador(){

  }

}
