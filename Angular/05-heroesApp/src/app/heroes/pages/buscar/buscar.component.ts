import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heores.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string= "";
  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){

    //Depsues de hacer la peticion asignamos todo el arreglo a la variable de heroes declarada en este component
    this.heroesService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);

  }

}
