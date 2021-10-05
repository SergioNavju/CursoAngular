import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
//Aunque para este momento tendiamos creado el modulo que maneja el resto de las rutas en el routing module,Angular no tiene conocimiento de ellos por lo que lo debemos de agregarlos por medio de otro path.

const routes: Routes =[
  {
    path: "auth",
    //Importamos el modulo en general y no el routing module para poder agregar todo como omponentes, pipes, cualquier cosa que forme al modulo
    //El loadChildren funciona con un promesa que al cumplirse se agrega la clase que esta creada en el auth module.ts
    loadChildren: () => import("./auth/auth.module").then (m => m.AuthModule)
  },
  {
    path: "heroes",
    //Importamos el modulo en general y no el routing module para poder agregar todo como omponentes, pipes, cualquier cosa que forme al modulo
    //El loadChildren funciona con un promesa que al cumplirse se agrega la clase que esta creada en el auth module.ts
    loadChildren: () => import("./heroes/heroes.module").then (m => m.HeroesModule)
  },
  {
    path: "404",
    component: ErrorPageComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
]

@NgModule({
  imports: [
    //Importamos unicamente las rutas principales
    RouterModule.forRoot (routes)
  ],
  //Exportamos el modulo con las rutas principales para poder hacer que queden al acceso de toda la aplicacion
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
