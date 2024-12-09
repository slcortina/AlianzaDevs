const persona = {
    nombre : 'Tony',
    apellido : 'Stark',
    edad : 45,
    direccion : {
        Ciudad : 'New York',
        zip : 6674637,
        lat : 12.66553,
        lng : 37.23343447
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log( persona2);