import { Component, Input } from '@angular/core';
import { Heroe } from '../../interface/heores.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
    mat-card{
      margin-top: 20px;
    }
  `]
})
export class HeroeTarjetaComponent {

  //Importamos la interface de heroe para poder inicializar la varible y no tener el error en la parte el html
  //RECORDAR: El signo de admiracion que tenemos en heroe es para indicar que nunca sera nulo heroe
  @Input() heroe!: Heroe;

}
