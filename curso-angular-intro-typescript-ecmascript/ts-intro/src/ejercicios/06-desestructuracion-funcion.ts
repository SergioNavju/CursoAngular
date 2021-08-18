/*
    ===== Código de TypeScript =====
*/

//-----DESESTRUCTURACION DE ARGUMENTOS----//


//Creamos una interface
export interface Producto{
    desc: string;
    precio:number;
}

//Creamos los objetos que usaran la interface
const telefono: Producto = {
    desc: "Nokia A1",
    precio: 150
}

const tableta: Producto = {
    desc: "iPad Air",
    precio: 350
}


//Creamos la funcion que usara un arreglo de objetos que sean de tipo "Producto" y regrese un arreglo de 2 numeros

export function calculaISV(productos:Producto[]): [number, number]{
    //Inicializamos varibles
    let total = 0;
    //Creamos un forEach que iterara el numero de onjetos ue tenga el arreglo. AL ser objetos podemos desestrucutrar y obtener unicamente el precio
    
    productos.forEach ( ( {precio} ) =>{
    //Utilizamos el precio y lo sumamos en total
        total += precio;
    })
    //Regresamos tanto el total como el impuesto
    return [total, total *0.15];
}

//Creamos el arreglo de objetos 
// const articulos = [telefono, tableta];
// //Al llamar la funcion de calcular el ISV desestrucuramos lo que nos regresa (En este caso un arreglo de los numeros)
// const [total, isv] = calculaISV (articulos);

// //imprimimos los resultados con los nuevos nombres
// console.log ("Total: ", total);
// console.log ("ISV: ", isv);