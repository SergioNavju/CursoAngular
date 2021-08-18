/*
    ===== Código de TypeScript =====
*/

//-----GENERICOS-----//
//Con un generico buscamos podemos hacer uniersale el tipo de dato que recibimos, pero conservarlo una vez que lo recibamos
//La T es solo parte de los concensos para poder usar genericos, pero realmente podemos usar cualquier letra
function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soySrting = queTipoSoy("Hola Mundo");
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);
//Podemos usar los explicitos para asegurar que tipo de dato vamos a recibir
let soyExplicito = queTipoSoy<number>(100);