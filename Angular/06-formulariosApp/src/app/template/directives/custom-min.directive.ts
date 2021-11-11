//Debemos de  declarar la directiva en los modulos

import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";
//Necesitamos de un selector que indique como se va a utilizar esa directiva
@Directive({
    //Le indicamos lo que debe de contener el input
    selector: "[customMin] [ngModel]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi:true
    }]
})
//Retomamos el objeto de Validator para poder extender una funcion de validate
export class CustomMinDirective implements Validator {

    //Necesitamos poder recibir el valor minimo que pusimos en el html, asi que  utilizamos el @Input
    @Input() minimo!: number;

    constructor(){
    }

    validate (control: FormControl){
        const inputValue = control.value;

        return (inputValue < this.minimo)
                ?{"customMin": true}
                :null;
       
    }

}