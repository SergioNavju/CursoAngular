/*
    ===== Código de TypeScript =====
*/

//-------DECORADORES DE CLASES------//

//Los decoradores sirven para cmabiar las clases en el momento que son definidas, en el momento que son definidas las extiend a internamente las funcinalidades
//Son funciones que explande su clase añadiendo funcionalidades especiales
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }

@classDecorator
class MiSuperClase{
    public miPropiedad: string = "ABC123";

    imprimir(){
        console.log("Hola Mundo");
    }
}

console.log (MiSuperClase);

const miClase = new MiSuperClase();
console.log(miClase.miPropiedad);