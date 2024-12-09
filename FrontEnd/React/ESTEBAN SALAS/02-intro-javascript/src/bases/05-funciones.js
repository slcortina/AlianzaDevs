const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4 = () => `hola mundo`;

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
    iud: 'ABC123',
    username: 'El_Whats23'
})

const user = getUser();
console.log(user);

/*Tarea*/
// function getUsuarioActivo(nombre) {
//     return {
//         iud: 'ABC567',
//         username: nombre
//     }
// }

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);