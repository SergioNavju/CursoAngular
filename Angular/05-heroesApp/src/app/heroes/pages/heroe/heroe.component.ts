import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs/operators';

import { Heroe } from '../../interface/heores.interface';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  //Tenemos que inyectar el servicio para poder tener los metodos/varibles del servicio
  //Inyectamos la parte del router para poder manejar las rutas
  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router) { }

  ngOnInit(): void {
    //Retomamos la parte del activatedroute para poder saber en que ruta estamos y apartamos la parte de "params" y separamos posterrioemnte solo el id
    this.activatedRoute.params
        .pipe(
          //Utilizamos el swicth para poder separar el id del objeto y poder mandarlo como un string y como parte de un parametro en getheroeporId que fue imoortado del servicio
          switchMap( ({id}) => this.heroesService.getHeroePorId(id))
        )
        .subscribe ( heroe => this.heroe =heroe);
  }

  //Creamos un metodo que podemaos consultar en el html para poder cambiar de ruta
  regresar(){
    this.router.navigate(["/heroes/listado"]);
  }

}
