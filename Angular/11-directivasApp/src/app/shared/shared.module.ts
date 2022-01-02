import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    CustomIfDirective,
  ],
  //  Debido a que vamos a utililizar la directiva fuera del modulo debemos de exportarla 
  exports:[
    ErrorMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
