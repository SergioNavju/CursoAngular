/*
    ===== Código de TypeScript =====
*/

//-------------------ARREGLOS---------------//

//De no espceficar el tipo de dato que vamos a usar, tipeScrpt usara "Any", todo JavaScript es un Any
//Si no especificamos TypeScrpt lo infiere
//Sin embargo podemos especificar que tipos va a recibir (NO DEBEMOS OLVIDAR INDICARLE QUE ES UN ARREGLO A LA VARIBLE USANDO LOS  "[]")
let habilidades: (boolean | string | number)[] = ["Bash", "Counter", "Healing", 100];
habilidades.push (true);

//-------------------OBJETOS & Interfaces---------------//

//Cuanod nosotros ebuscamos ser mas especificos cuando dclaremos un OBJETO respecto a sus tipos lo recomendable es usar una Interface
//La nomenclatura usa un UpperCamelCase
//Cuando nosotros declaramos una Interface con los tipos especificos de lo que vamos a usar en el objeto debemos de usar todos los tipos
//De existir una propiedad que no siempre va a existir o que por lo menos no dentro de la primera declaracion usamos el "?" para indicar que es opcional

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: "Strider",
    hp: 100,
    habilidades:["Bash", "Counter", "Healing"]
}

personaje.puebloNatal = "Pueblo Paleta";

console.table (personaje);