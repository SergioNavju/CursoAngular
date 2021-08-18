/*
    ===== Código de TypeScript =====
*/

//-------- FUNCION ----- //
//Cuando no existen errores de sintaxis TypeScrpt podra compilar y seguir adelante 
// Nosotros al no determinar excatamente el tipo de dato qyue vamos a recibir, la funcion misma podra hacer cosas diferentes (en este caso puede concatenar en lugar de sumar)
//Podemos especificar el tipo de dato que vamos a regresar al agregar los dos puntos de declarar los parametros
function sumar (a: number,b: number): number{
    return a + b;
}

//Funciona exactamente igual para las funciones de flecha
const sumarFlecha = (a:number, b:number): number =>{
    return a+b;
}


//-------- PARAMETROS DE FUNCION----- //
//Al declarar una funcion nosotros podemos indicar ademas del tipo de dato qye vamos a recibir, podemos determinar que tan necesario es en la funcion, podiendo elegir tres tipos de parametros
//1: Parametros obligatorio (Se escribe primero)
//2: Parametros opcionales (Se escribe despues de todos los obligatorios)
//3: Parametros con un valor predefinido (Se escribe despues de todos los parametros opcionales)

function multiplicar(numero: number, otroNumero?: number, base:number = 2): number{
    return numero * base;
}

//En este caso si nosotros quisieramos cambair el valor de la base tendremos que dar el parametro opcional (otro numero)
// const resultado = multiplicar (5,0,10);

// console.log(resultado);

//------- FUNCIONES CON OBJETOS COMO ARGUMENTOS--------//
//Cuando nosotros no especificamos el tipo de nada es cuando incluso podemos desconocer lo que hace la función. Porque no sabemos que es lo que estamo mandando o recibiendo

//Definimos la interface
//Si nosotros usamos el tipo que declaramos en la inteface, tenemos que usar por lo tanto todo lo que incluya la interface (funciones y atributos)
//La inteface son objetos que ayudan a restringir a otro objeto dentro del codigo

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: ()=> void;
}

//Definimos la funcion
function curar (personaje: PersonajeLOR, curarX:number): void{

    personaje.pv += curarX;
}

//Definimos al nuevoPersonaje
const nuevoPersonaje: PersonajeLOR = {
    nombre: "Strider",
    pv: 50,
    mostrarHp() {
        console.log("Puntos de vida: ", this.pv);
    }
}

//Llamamos a la funcion antes declarada
curar (nuevoPersonaje,20);

nuevoPersonaje.mostrarHp();
