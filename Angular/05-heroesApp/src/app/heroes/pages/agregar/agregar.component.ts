import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/heores.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: "DC Comics",
      desc: "DC - Comics"
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics"
    }
  ];

  //Inicializamo el arreglo
  heroe: Heroe={
    superhero: "",
    alter_ego:"",
    characters:"",
    first_appearance: "",
    publisher: Publisher.DCComics,
    alt_img:""
  }

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .subscribe (({id}) => console.log (id))

  }

  guardar(){
    //Validacion de formulario
    if(this.heroe.superhero.trim().length === 0 ){
      return;
    }

    this.heroesService.agregarHeroe(this.heroe)
        .subscribe(resp => {
          console.log("Respuesta", resp);
        })
  }

}
