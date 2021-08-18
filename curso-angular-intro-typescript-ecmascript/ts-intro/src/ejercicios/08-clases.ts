/*
    ===== Código de TypeScript =====
*/

//----CLASES----//

//Similitudes con las clases de Java

//En una clase nosotros ademas de poder definir el tpipo de dato que queremos que tenga podemos hacer la implementacion de la funcion
//Las clases si existen en JavaScript

//Nosotros podemos definir el alcance dentro de la clase:
//Cuando no esta especificado un tipo de alcance todas son PUBLIC
    //Private: Una propiedad solo es visible en esa clase
        //Para private necesitamos de un constructor para poder usar la propiedad
    //Public: Alguien podra ver la propiedad fuera de la clase
    //Static: Podemos acceder a la propiedad sin crear una instancia

    //la instancia es el objeto donde se aplicaran las propiedades
//---Extender una clase ---//
//Nosotros podemo agregar funcionanlidades a otras clases 
class PersonaNormal{
    constructor(
        public nombre: string,
        public dirección: string
    ){}
}  
//Podemos expandir Heroe con las propiedades y metodos que tiene persona normal
class Heroe extends PersonaNormal{
    //Propiedad
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    //----CONSTRUCTOR----//
    //Es una funcion que se va a llamar cuando creo una instancia de la clase

    constructor(
        //Aqui al agregar el alcance es como podemos decirle que haga una propiedad
        public alterEgo:string,
        public edad: number,
        public nombreReal: string

    ){
        //Se llama al super, que es para que mandemos los argumentos que necestia el constructor de PeronaNormal
        super(nombreReal, "New York, USA");
    }
}



//En una interface no podemos hacer la impletacion de la función, solo podemos deffinir los tipos
//Las interface No existen en JavaScript
// interface Personaje2{
//     alterEgo?: string;
//     edad?: number;
//     nombreReal?: string;

//     imprimirNombre?: () => string;
// }
// const  spiderman: Personaje2={}

//Esta es la instancia
//Los parentesis haccen referencia al constructor

const  ironman = new Heroe("Ironman", 45, "Tony");
console.log(ironman);