import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  private debounceTimer?: NodeJS.Timeout;

  constructor( private placesService: PlacesService ) { }

  //Metoodo para poder implimentarn un debounce que espere a que se scriba todod
  //Cada vez que cambie algo se manda el query
  onQueryChanged( query: string = '' ) {
    //Si tiene algun valor se borra
    if ( this.debounceTimer ) clearTimeout( this.debounceTimer );
    //Hasta que poasen 350 milesimas ya se manda todo el valor
    this.debounceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery( query );
    }, 350 );    

  }


}
