
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zipcode: 10200,
        lat: 14.3748,
        lng: 34.4959
    }
};

// console.table( persona );
// console.log( {persona} );

console.log( persona );

const persona2 = {...persona}; // Esto no esta permitido porque modificamos el objeto original al cambiar lo que sea en su copia

persona2.nombre = 'Peter';

console.log( persona2 );
console.log( persona );