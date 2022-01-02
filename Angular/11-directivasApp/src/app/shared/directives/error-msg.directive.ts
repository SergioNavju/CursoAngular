import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  //Selector apra poder determinar el nmombre de la directiva
  selector: '[error-msg]'
})

export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color: string = 'green';
  private _mensaje: string = 'Este es un texto por default';

  
  htmlElement: ElementRef<HTMLElement>;
  //Con el input le indicamos que puede refdcibir valores del padre

  //Los stter solo se ejecutan si hya algun cambio 
  //EN tiempo real
  @Input() set color (valor:string){
    // this.htmlElement.nativeElement.style.color = valor;
    this._color=valor;
    this.setColor();

  }

  //No en tiempo real
  // @Input() mensaje: string = 'Este campo es necesario Onda vital';

  //En tiempo real
  @Input() set mensaje(valor: string){
    // this.htmlElement.nativeElement.innerText= valor;
    this._mensaje = valor;
    this.setMensaje();
  
  }

  //En tiempo real
  @Input() set valido(valor:Boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    }
    else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }


  //Con el valor que estamos recibiendo es para que podamos identificar el elemento en el que esta puesto la diurectiva
  constructor(private el: ElementRef<HTMLElement>){
    this.htmlElement=el;
   }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
    this.setEstilo();
     this.setColor();
     this.setMensaje();
  }

  setEstilo():void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  //Nop en tiempo real
   setColor():void{
     this.htmlElement.nativeElement.style.color = this._color;
   }

  //No en tiempo real
  setMensaje():void {
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

}
