import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  nombre: string= "Wasabi";
  segundos: number=0;
  timerSubscription!: Subscription;

  constructor() {
    console.log("Constructor");
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.timerSubscription = interval(1000).subscribe(i =>{
      this.segundos = i;
    })
  }

  guardar(){

  }

}

//QUE ES UN HOOK?
//A un hook lo podemos entender como un metodo (funcion) que sucede (se ejecuta) de manera inmediata. 
//Se ejectua cuando sucede algo en el ciclo de vida de un componente en angular
//Son metododos reservados, debido a que si solo pones la implementacion del metodod angular lo llamara

//CONSTRUCTOR
//Aqui hacemos inyecciones de dependencias quer usualmente el componente necesita o si necesitamo inicializar algo antes de que el html se construya

//ngOnInit
//Es cuando el componente ya esta inicializado y nosotros podemos tener acceso al html
//Aqui podemos hacer las peticiones http, pedir servicios

//ngOnChanges
//NECESITA EL DECORADOR INPUT
//Cuando nos mandemos la informacion de un formulario entre compoenentes 
//Nos ayuda a ver los camnbios hechos a un input

//ngOnDestroy
//Es el metodo que se manda a llamar cuando se destruye una parte del componente (Por ejemplo cuando no mostramos algo con el ngIf)

//ngDoCheck - ng AfterCOntentCheck - ngAfterVoewChecked
//Se llaman a estos metodos cuando dentro del html se llama a algun metodo del ts y angular necesita revisar que cosas necesita vovler a rendereizar





