import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interface/heores.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  //Inyectamos esta parte para poder cerrar el dialogo

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
                // INyectamos esto para poder recibir la informacion del padre
                //Tenemos que saber que tipo de dato se mandara (en este caos Heroe) y lo almacenaremos en data 
               @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
  }

  borrar(){
    this.dialogRef.close(true);
  }

  cerrar(){
    this.dialogRef.close();
  }

}
