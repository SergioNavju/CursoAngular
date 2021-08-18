/*
    ===== Código de TypeScript =====
*/

//-----ENCADENAMIENTO OPCIONAL-----//
// El signo de interrogacion ? tiene distintos usos, el siguiente muestra solo cuando una propiedad es opcional
interface Pasajero{
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero ={
    nombre: "Fernando"
}

const pasajero2: Pasajero ={
    nombre: "Melissa",
    hijos: ["Natalia", "Gabriel"]
}
//Si nosotros nos agregamos el signo de interrogcion caemos en un error fatal para JavaScrpt
//Nosotros al agregar el signo de interrogacion le indicamos que queremos verfiicar algo ante de hacer lo sigueinte como leer el lenght. Incluso dando unaopción a un resultado no adecuado (el 0)
function imprimeHijos(pasajero: Pasajero): void{
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log (cuantosHijos);
}

imprimeHijos(pasajero1);