import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
//Si queremos mostrar algo en la app debemos de tenerlo como una propiedades
export class ListadoComponent{
  heroes: string[] = ["Spiderman", "IronMan", "Hulk", "Thor", "Capitan America"];
  heroeBorrado: string = "";

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
