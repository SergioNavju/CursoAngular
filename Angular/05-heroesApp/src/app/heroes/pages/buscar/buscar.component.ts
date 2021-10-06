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
  heroeSeleccionado!: Heroe | undefined;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){

    //Depsues de hacer la peticion asignamos todo el arreglo a la variable de heroes declarada en este component
    this.heroesService.getSugerencias(this.termino.trim())
        .subscribe(heroes => this.heroes = heroes);

  }

  opcionSeleccionada (event: any){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    //Como el valor del heroe.id puede ser nulo ademas de string, se le agrega el ! para eliminar el error
    this.heroesService.getHeroePorId( heroe.id! )
        .subscribe (heroe => this.heroeSeleccionado = heroe);
  }



}
