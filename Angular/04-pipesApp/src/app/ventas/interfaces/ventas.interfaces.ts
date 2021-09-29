//Una enumetacion trabaja con valores numericos expresados en cadenas (rojo es 0, negro es 1, axul es 2 etc)
export enum Color {
    rojo, negro, azul, verde
}

export interface Heroe{
    nombre: string;
    vuela: boolean;
    color: Color;
}