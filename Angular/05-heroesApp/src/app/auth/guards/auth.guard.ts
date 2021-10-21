import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  //Al ser un servicio debemos de importwlo apra poder udarlo


  //Inyectamos nuestro servicio donde tenemos la varible que deja de ser undefined cuando el usuario inicia 
  constructor(private authService: AuthService,
              private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    
    return this.authService.verificaAutenticacion()
               .pipe(
                  tap( estaAutenticado => {
                    if( !estaAutenticado){
                      this.router.navigate(["./auth/login"])
                    }
                  } )
               );
    // if(this.authService.auth.id){
    //   return true;
    // }

    // console.log("T R O L E O herrrmano del CanActivate");
    // return false;
  }

  //UNICAMENTE PREVIENE DE PODER CARGAR EL MODULO, SIN EMBARGO SI EL MODULO YA SE ENCONTRABA CARGADO SI PODREMOS ENTRAR
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {
      //Hacemos la verificación para ver si el usuario existe
      return this.authService.verificaAutenticacion()
                  .pipe(
                    tap( estaAutenticado => {
                      if( !estaAutenticado){
                        this.router.navigate(["./auth/login"])
                      }
                    } )
                );
      // if(this.authService.auth.id){
      //   return true;
      // }

      // console.log("T R O L E O herrrmano del canLoad");
      // return false;
  }
}
