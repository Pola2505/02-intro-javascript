// Desustructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3 ] = personajes;
console.log( p1, p2, p3 );



const retornaArreglo = () => {
    return ['ABC', 123];
};

const [ letras, numeros ] = retornaArreglo();

console.log( letras, numeros );

//Tarea

const usarState = ( valor ) => {
    return [ valor, () => {console.log('Hola Mundo')}];
};

const [nombre, ponerNombre] = usarState('Goku');

console.log( nombre );
ponerNombre();