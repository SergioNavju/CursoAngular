import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})

//Para el debouncer si usaremos el ciclo de vida OnInit
export class PaisInputComponent implements OnInit{
  
  //Para poder obtener de regreso la funcionalidad del form debemos de emitir el termino por eso usamo un Output
  //Debemos de especificar el tipo de evento que se va a emitir, en este caso termino es un string
  @Output() onEnter:EventEmitter<string> = new EventEmitter();

  //onDebounce se va a emitir cuando la persona deja de escrtibir
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string ="";

  //Debounce subject es un observer
  debouncer:Subject<string> = new Subject();

  termino: string = "";

  buscar(){
    this.onEnter.emit(this.termino);
  }

  //Solo se dispara una vez cuando el componente es creado
  //Nos suscribimos a sus eventos
  ngOnInit(): void {
    this.debouncer
      .pipe(
        //Tenemos que enviar cuantas milesimas de segundo queremos que pasen para que emita el sifuiente valor
        debounceTime( 300)
      )
      .subscribe(valor =>{
        this.onDebounce.emit(valor);
    })
  }

  teclaPresionada(){
    //Ahora ya esta conecrado el debouncer. Cada vez que alguine presiona una tela se llama al next que esta suscrito a los eventos 
    this.debouncer.next(this.termino);

  }
}
