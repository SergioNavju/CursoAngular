import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interface/heores.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  //Añadimos lo declaradi en la parte del service junto con su tipo
  //Asi podremos tener todos los metodos del HeroesService

  //Inicializamos la propiedad para poder darle un tipo de interface
  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {

    //Nos suscribimos al observable con la respuesta de getHeroes que va a regresar el arreglo de objetos con los heroes
    this.heroesService.getHeroes()
        .subscribe ( heroes => {
          this.heroes = heroes;
        });
  }
}
