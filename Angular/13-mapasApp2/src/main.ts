import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2lvbmF2YXJyb25qIiwiYSI6ImNreHdiNGZxMTV4NWoybm80NnA3eXZoYjgifQ.bArd6A9rmyQt-7Nexbd1uQ';


//Verifiacion para ver si el navegador soporta la geolozalizacin
if ( !navigator.geolocation ) {
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
