import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "registro",
        component: RegistroComponent
      },
      {
        path: "**",
        redirectTo: "login"
      }
    ]
  }
]

@NgModule({
//Usamo el forchild para poder indicar que cargaremos estas rutas de forma perezosa
  imports: [
    RouterModule.forChild (routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
