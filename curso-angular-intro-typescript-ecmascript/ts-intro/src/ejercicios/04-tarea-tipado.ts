/*
    ===== Código de TypeScript =====
*/
//-----------INTERFACES Y OBJETOS ANIDADOS---------//
interface SuperHeroe{
    nombre:string;
    edad: number;
    //Anque correcta, no es recomendable la forma en la que se soluciona el objeto anidado.
    // direccion:{
    //     calle: string;
    //     pais: string;
    //     ciudad:string;
    // }
    direccion:Direccion;
    mostrarDireccion:() => string;
}

//La mejor forma para poder resolver el problema de los objetos anidados es creando otra interface
interface Direccion{
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: "Spiderman",
    edad: 30,
    direccion:{
        calle: "Main St",
        pais: "USA",
        ciudad: "NY"
    },
    mostrarDireccion(){
        return this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log (direccion);