import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor{
  color: string;

  marker?: mapboxgl.Marker;
  centro?: [number,number]
}

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


  //Arreglo de marcardorees
  marcadorres: MarcadorColor[]=[];


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

    //Leemos los marcadores guardados
    this.leerLocalStorage();

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

    this.marcadorres.push({
      color,
      marker: nuevoMarkador
    });

    //Guardamos el marcador
    this.guardarMarcadoresLocalStorage();

    nuevoMarkador.on('dragend',() =>{
      this.guardarMarcadoresLocalStorage();
    });
  }

  //Usamo flyto como propiedad para pooder darle coordenadas y dirigir ahi
  irMarkador(marker: mapboxgl.Marker){
    this.mapa.flyTo({
      center: marker.getLngLat()
    })
  }

  //Guardar la posicion de los markadores
  guardarMarcadoresLocalStorage(){

    //Creamos el arreglo donde guardaremos las coordenadas
    const lngLatArr: MarcadorColor[]=[];

    // Recorremos el arreglo entero de marcadores
    //Obtenermos el color y la longitud del objeto enmtero de marker
    this.marcadorres.forEach(m =>{
      const color = m.color;
      const {lng,lat} = m.marker!.getLngLat();
      
      //Agregamos al arreglo el color y la latitud que antes habiamos sacado del marker
      lngLatArr.push({
        color: color,
        centro: [lng, lat]
      });
    });
    
    // Guaradamos en el local storage & convertimos a cadena el arreglo
    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));

  }

  leerLocalStorage(){
    //Si no hay nada en el arreglo
    if(!localStorage.getItem('marcadores')){
      return;
    }
    //Restauramos el objeto 
    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    //Recorremos el arreglo
    lngLatArr.forEach(m =>{
      //Separamos en una varible cada marcador del arreglo
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
      .setLngLat(m.centro!)
      .addTo(this.mapa);
      
      this.marcadorres.push({
        marker: newMarker,
        color: m.color
      })

      //Ponemos un listener para ver a los marcadores
      //Dterminamos donde dejamos de mover el marcador y volvemos a guardar
      newMarker.on('dragend',() =>{
        this.guardarMarcadoresLocalStorage();
      });

    })

  }

  borrarMarcador( i: number){
    //Lo eliminamos del mapa
    this.marcadorres[i].marker?.remove();
    
    //Lo eliminamos del arreglo
    this.marcadorres.splice(i,1)

    //Guardamos el estado actual del arreglo
    this.guardarMarcadoresLocalStorage();
  }

}
