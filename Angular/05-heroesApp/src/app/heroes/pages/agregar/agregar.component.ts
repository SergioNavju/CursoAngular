import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/heores.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: "DC Comics",
      desc: "DC - Comics"
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics"
    }
  ];

  //Inicializamo el arreglo
  heroe: Heroe={
    superhero: "",
    alter_ego:"",
    characters:"",
    first_appearance: "",
    publisher: Publisher.DCComics,
    alt_img:""
  }

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               private dialog: MatDialog) { }

  ngOnInit(): void {

    //Es recomendable el hacer la peticion en el ngOnInit para que mientras la pagina se construya se hagn las peticiones http
    
    //Requerimos del id par apoder editar el super

    //Si no nos encontramos en "editar" regresaremos y no pediremos el id en el caso de ser un heroe que apenas se esta construyendo
    if( !this.router.url.includes("editar")){
      return;
    }

    //Hacemos la destructuracion del id para que al tener el id se regrese con un observable el heroe con ese id
    this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.heroesService.getHeroePorId( id ))
        )
        //Asignamos el valor de regreso a la varible heroe que tenemos aquí
        .subscribe (heroe => this.heroe = heroe);

  }

  guardar(){
    //Validacion de formulario
    if(this.heroe.superhero.trim().length === 0 ){
      return;
    }

    //Necesitamos poder distinguir entre actualizar y crear un heroe. Lo haremos revisando si existe un   id
    if(this.heroe.id){

      //Actualizar
      this.heroesService.actualizarHeroe( this.heroe)
          .subscribe (heroe => this.mostrarSnackbar("Registro Actualizado"));
    }
    else{

      //Crear
      this.heroesService.agregarHeroe( this.heroe)
          .subscribe (heroe => {
          //Lo redigimos
          this.router.navigate(["/heroes/editar", heroe.id]);
          this.mostrarSnackbar("Registro Creado");
      })
    }
  }

  borrar(){
    //CONFIRMACION DE ELIMINAR ELM MONO 

    //Tenemos que tener un componente nuevo que se abrira para poner la info deld dialogo
    const dialog=this.dialog.open( ConfirmarComponent,{
      width: "250px",
      //Por data podemos mandar casi cualquier ripo de infromacion para pero hay que recoerdear que js lo pasa por referenciam entonces se puede modificar
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      (result)=>{
        if(result){
              //PROCEDIMIENTO PARA PDOER BORRAR EL MONO

          this.heroesService.borrarHeroe(this.heroe.id!)
              .subscribe (resp =>{
                //Lo redirigimos
                this.router.navigate(["/heroes"]);
              })
        }
      }
    )


  }

  mostrarSnackbar(mensaje: string):void{
    //EL PRIEMRO ES MENSAJE QUE RECIBIMOS Y ELSEGUDNO ES EL NOMBRE DE LA ACCION
    this.snackBar.open(mensaje, "Cerrar", {
      //Tiempo en milisegundos para cerrar el snackbarr
      duration: 2500
    });
  }
}
