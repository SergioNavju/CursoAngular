import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  //Inyectamos el servicio
  constructor( private gifsService: GifsService  ) { }

  //El historial que obtendremos es el historial del sidebar component(Que usamos mas tarde en el html) y lo extraemos del historial que tenemos en el servicio
  get historial() {
    return this.gifsService.historial;
  }
  
  buscar( termino: string ) {
    this.gifsService.buscarGifs( termino );
  }
}
