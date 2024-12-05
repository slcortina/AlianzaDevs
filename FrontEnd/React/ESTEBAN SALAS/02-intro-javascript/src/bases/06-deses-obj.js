const persona = {
    nombre: 'Esteban',
    edad: 20,
    clave: 'salas2004'
};

const userContext = ({clave,nombre,edad,rango = 'Capitán'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.8874,
            lng: -20.88494
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng}} = userContext(persona);
console.log(nombreClave,anios);
console.log(lat,lng);