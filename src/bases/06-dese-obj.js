

// Desestructuracion
// Asignacion desestructurante



const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// const { nombre, edad, clave  } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);
// console.log(persona.edad);
// console.log(persona.clave);

const usarContext = ( {clave, nombre, edad, rango = 'Capitan'} ) => {

    
    // console.log( nombre, edad, rango )

    return {
        nombreClave: clave, 
        anios: edad,
        latlng: {
            lat: 12.393,
            lng: 2444
        }
       
    }

};

const {nombreClave, anios, latlng:{lat, lng}}  = usarContext( persona );

console.log( nombreClave, anios);
console.log( lat, lng );
