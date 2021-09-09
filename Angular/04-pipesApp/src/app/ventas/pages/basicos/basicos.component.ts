import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "sergio";
  nombreUpper: string = "SERGIO";
  nombreCompleto: string = "SerGiO NavaRrO";

  fecha: Date= new Date();
}
