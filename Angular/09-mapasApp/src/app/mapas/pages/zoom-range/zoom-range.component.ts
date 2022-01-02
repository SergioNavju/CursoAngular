import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container{
      height: 100%;
      weight: 100%;
    }
    .row{
      background-color:white;
      border-radius: 5px;
      bottom:50px;
      left:50px;
      padding:10px;
      position:fixed;
      z-index: 9999;
      width: 400px;
    }

    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy{

  //Para poder ver la referencia local del html 
  @ViewChild("mapa") divMap!: ElementRef;

  //Hacemos el .Map por que debemos de importar toda la libereria 
  //Usamoa el ! porque debemos de inicisalizar el objeto, sin embargo, aunque se propone usar el constructor pero como no se carga de maner inmediata el mapa no podemos mencionar ese objeto ern el construcor
  mapa!: mapboxgl.Map;

  //Valor del zoom original
  zoomLevel: number = 16;

  center: [number,number] = [-99.15610260664361, 19.372248349887656];

  constructor() { }

  //Debemos de destruir los listeners
  ngOnDestroy(): void {
    this.mapa.off ('zoom',()=>{});
    this.mapa.off ('zoomend',()=>{});
    this.mapa.off ('move',()=>{});


  }

  //Dejawmos de usar el OnInit para usar el ngAfterViewInit debido a los ciclos de vida de Anguklar
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

    //----Zoom del mapa --///

    //Creamos un listener paara saber los valores del zom que puede adquirir
    this.mapa.on('zoom', () =>{
      this.zoomLevel= this.mapa.getZoom();
    });

    //Para saber en donde se deja de hacer zoom y regresarlo a un valor conocido
    this.mapa.on('zoomend', () =>{
      if(this.mapa.getZoom() > 19){
        this.mapa.zoomTo(19);
      }
    }); 
    
    //--Coordenadas del mapa---//
    this.mapa.on('move', (event)=>{
      const target = event.target;
      const {lng, lat}= target.getCenter();
      this.center=[lng,lat];
  
    })
  }

  


  //--Adignacion devalores ---//
  
  zoomOut(){
    this.mapa.zoomOut();
  }

  zoomIn(){
    this.mapa.zoomIn();
  }

  //Recibimos el valor del input y se lo ponemos al valor de zoom
  zoomCambio(valor:string){
    this.mapa.zoomTo(Number(valor));
  }


}
