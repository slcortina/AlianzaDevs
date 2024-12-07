const personajes = ["Goku", "Vegeta", "Gohan"];
console.log(personajes);

const [p1, p2, p3] = personajes;
console.log(p2);

const obtenerPersonajes = () => {
  return personajes;
};

const [, , p4] = obtenerPersonajes();
console.log(p4);

const personaje = {
  name: "Trunks",
  raza: "Sayayin",
  Direccion: {
    lat: 10.2,
    log: 23.7,
  },
};

const { name: Nombre1 } = personaje;
console.log(Nombre1);

const getRaza = ({ poder = 10 }) => {
  console.log("Poder ", poder);
};

getRaza(1);

const setState = () => {
  return [
    "Goku",
    () => {
      console.log("Cambié el nombre");
    },
  ];
};

const [nombre, setNombre] = setState();
console.log(nombre);
setNombre();
