//importación tradicional
import { Producto, calculaISV } from './06-desestructuracion-funcion';

/*
    ===== Código de TypeScript =====
*/

//----IMPORTACIONES Y EXPORTACIONES -----//

//Producto es un tipo que queremos importar de otro archivo en donde si esta definido 
//Para eso debemos de agregar export en la definicon del tipo en el archivo en el que se le define.

//Con Ctrl + .  podemos importar de forma rapida la interface
//Nosotros usaremos la importacion por desustructuracción
const carritoCompras: Producto[] = [
    {
        desc: "Telefeno 1",
        precio: 100
    },
    {
        desc: "Telefeno 1",
        precio: 150
    },
];

//Tambien podemos exportar funciones 
const [total, isv] = calculaISV(carritoCompras);

console.log ("Total", total);
console.log ("ISV", isv);

//Sin embargo en el navegador se imprimen dos veces,e esto se debe a que para que la funcion exista lo que hace es ejecutar el archivo donde se enuentra declarada la funcion  (Junto con los Console logs)
