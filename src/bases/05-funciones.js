// Funciones en JS

// const saludar = function ( nombre ) {
//     return `Hola, ${nombre}`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;

const saludar4 = ( ) => `Hola Mundo`;

const getUser = ( ) => ({ uid: '2834884', username: 'El_Papi'});



console.log( saludar2('Goku'));
console.log( saludar3('Vegeta'));
console.log( getUser() );

const user = getUser();
console.log( user );

//Tarea
//1. Transformen a funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
const getUsuarioActivo = ( nombre ) => ({ uid: '273839',username: nombre});

const usuarioActivo = getUsuarioActivo('Sandra');
console.log(usuarioActivo)
