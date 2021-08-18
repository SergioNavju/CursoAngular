/*
    ===== Código de TypeScript =====
*/

//De esta manera TypeScript infiere el tipo de dato que estamos manejando (los dos puntos indican el tipo)
//let nombre = "strider";
// Cuando manejamos constantes el tipo aparecera como el contenido de esa constante porque nunca va a cambiar

//Tambien podemos hacerlo mas explicito, una vez que nosotros estamos haciendo que esto sea mas explicito no podemos hacer mezclas del tipo declarado y el tipo usado
let nombre: string = 'Strider';

//Podemos darle opciones a typescrpt para decrir el tipo que va a estar manjendo usando "|"
let hp: number | string = 95;

//Declarar Booleanos
let estaVivo: boolean = true;

hp = "FULL";

console.log (nombre, hp);