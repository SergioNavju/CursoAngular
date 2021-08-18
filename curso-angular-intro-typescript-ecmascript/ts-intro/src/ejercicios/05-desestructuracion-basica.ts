/*
    ===== Código de TypeScript =====
*/


//-----DESESTRUCTURACION DE OBJETOS-----//

//Creamos una interface
interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

//Creamos una interface de un objeto anidado
interface Detalles{
    autor:string;
    anio: number;
}


//Creamos la constante 
const reproductor: Reproductor={
    volumen:90,
    segundo: 36,
    cancion: "Mess",
    detalles:{
        autor:"Ed Sheeran",
        anio: 2015
    }
}



//La destructuracion es extrar diretamente algunas propiedad de algunos objetos y crear variables
//dentro de las llaves mencionamos que propiedades queremos que maneje como variables

//DENTRO DE LA DESTRUCTURACION DE OBJETOS no importa el orden en el que desestructuremos
const { volumen, segundo, cancion, detalles} = reproductor;
//const { autor } = detalles;

//De tener un conclicto on el nombre de las variables podemos cambiar el nombre de la propiedad al aplicar la desestructuracion
const autor= "Fulano";
const { autor:autorPropiedad } = detalles;


//Con esto podemos alivianar lineas de codigo que tenemos al evitar poner el objeto y luego su propiedad
// console.log("El volumen actual es de:  ", volumen );
// console.log("El segundo actual es de:  ", segundo );
// console.log("La canción actual de:  ", cancion);
// console.log("El autor es:  ", autorPropiedad);


//-----DESESTRUCTURACION DE ARREGLOS-----//
//Para destructurar un objeto ae hace con llaves
//Para destructurar un arreglo se hace con corchetes

const dbz: string[] = ["Goku","Vegeta", "Trunks"];

//DENTRO DE LA DESTRUCTURACION DE ARREGLOS SI importa el orden en el que desestructuremos
//Segun el orden en el que lo definas sera el nombre que adquiera
const [ , ,p3] = dbz;
//De no querer decalrar el resto de las varibles basta con dejar el espacio de las comas
console.log("Personaje 1: ", dbz [0]);
console.log("Personaje 2: ",dbz [1]);
console.log("Personaje 3: ", p3);