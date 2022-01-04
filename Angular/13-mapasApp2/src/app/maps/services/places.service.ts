import { Injectable } from '@angular/core';
import { PlacesResponse, Feature } from '../interfaces/places';
import { PlacesApiClient } from '../api';
import { MapService } from '.';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  //Para obtener la geolocalizacion
  public useLocation?: [number, number];

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  //Para saber si esta cargando la geolocalizacion
  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor( 
    private placesApi: PlacesApiClient,
    private mapService: MapService
  ) {
    this.getUserLocation();
  }

  //COnvertimos a una promesa el obtener la geolocalizacion en lugar de callbacks
  public async getUserLocation(): Promise<[number, number]> {

    return new Promise( (resolve, reject ) => {

      //Obtenemos la geolocaliazcion
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [ coords.longitude, coords.latitude ];
          resolve( this.useLocation );
        },
        ( err ) => {
          alert('No se pudo obtener la geolocalización')
          console.log(err);
          reject();
        }
      );


    });

  }


  getPlacesByQuery( query: string = '' ) {

    if ( query.length === 0 ) {
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if ( !this.useLocation ) throw Error('No hay userLocation');

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`/${ query }.json`, {
      params: {
        proximity: this.useLocation.join(',')
      }
    })
      .subscribe( resp => {
        this.isLoadingPlaces = false;
        this.places = resp.features;

        this.mapService.createMarkersFromPlaces( this.places, this.useLocation! );
      });

  }


  deletePlaces() {
    this.places = [];
  }


}
