import { Component } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego:string= "";

  //Inicializamos a la persona
  persona: Persona = {
    nombre: "JUAN",
    favoritos: [
      {id:1, nombre:"Metal Gear"},
      {id:2, nombre: "Mario Bros"}
    ]
  }

  agregarJuego(){
    const nuevoFavorito: Favorito={
      id: this.persona.favoritos.length +1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego= "";
  }

  guardar(){
    console.log("P A B L O")
  }

  eliminar(index: number){

    this.persona.favoritos.splice(index,1);

  }

}
