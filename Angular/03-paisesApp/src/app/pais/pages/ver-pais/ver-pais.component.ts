import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  //Una forma de poder hacer que Typescript acepte un nulo
  pais! :Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    //Es un observable
    //Podemos optimizar el siguiente codigo pero no lo haremos... al final si lo hicimos 
    // this.activatedRoute.params
    //   .subscribe( ({id}) =>{
    //     console.log(id);

    //     this.paisService.getPaisPorAlpha (id)
    //       .subscribe( pais =>{
    //         console.log(pais);
    //       })
    //   })

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorAlpha(id) ),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais);
  }

}
