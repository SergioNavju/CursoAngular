import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{
  nombre: string = "Sergio";
  genero: string = "masculino";

  invitacionMapa = {
    "masculino": "tenerlo",
    "femenino": "tenerla"
  }
}
