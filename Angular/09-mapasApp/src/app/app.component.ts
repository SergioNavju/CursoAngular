import { Component, OnInit } from '@angular/core';
//Importamos de manera global
//Antes debismo de anadir la parte del tipado de ts
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

//SE IMPORTA EL MAPBOX DEBIDO A QUE SIEMPRE SE REVISA PRIMERO ESTE COMPONENTE Y SE HACE DE MANERA GLOBAL

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //Establcemosd de dponde queremos renderizar el mapa 
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }

  title = 'mapasApp';
}
