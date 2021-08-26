import { Component, Input} from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent {

  //Tenemosw que importar la interface y volver a definir paises con el tipo que le corresponde para evitar loos errores eb el html
  @Input() paises: Country[] = [];

  constructor() { }

}
