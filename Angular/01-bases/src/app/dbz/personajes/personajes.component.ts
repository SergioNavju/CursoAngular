import { Component} from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  //Aunque ya pudimos retomar el objeto personajes no podemos ver sus tipos, por lo que creamos la carpeta y el valor interfaces
  // @Input() personajes: Personaje[] = [];
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService){
  }
}
