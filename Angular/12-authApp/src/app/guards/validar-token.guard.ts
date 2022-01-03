import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService,
              private router: Router){}

  //Para ver si puede activar el modulo
  canActivate(): Observable<boolean> | boolean {
    //Anasiumos lo de validarytojken
    return this.authService.validarToken()
              .pipe(tap(valid=>{
                  if(!valid){
                    this.router.navigateByUrl('/auth');
                  }}))
  }
  //Para ver si puede cargar elk modulo
  canLoad(): Observable<boolean> | boolean {
   return this.authService.validarToken()
            .pipe(tap(valid=>{
              if(!valid){
                this.router.navigateByUrl('/auth');
              }}))
  }

}

//  Los guards son passo anteriores a que se muestre el componente
