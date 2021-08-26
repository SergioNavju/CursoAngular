//SE TIENE QUE IMPORTAR EN EL APP-MODULE
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

//RUTAS
//El pad es lo que quermos que aprezca en la ruta
const routes: Routes = [
    {
        //Que componente quiero que sea el principal
        path: "",
        component: PorPaisComponent,
        pathMatch: "full"
    },
    {
        path: "region",
        component: PorRegionComponent
    },
    {
        path: "capital",
        component: PorCapitalComponent
    },
    {
        //Con los dos puntos nos referimos a la varible que ira cambiando ahí
        path: "pais/:id",
        component: VerPaisComponent
    },
    //Es lo que sucedera cuando el usuario no vaya a alguna de las rutas anteriores
    {
        path:"**",
        redirectTo:""
    }
        

];

@NgModule({
    //RouterModule recibira elementos tipo routes que pueden ser tipo hijo o principales (en este caso principales)
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}