const url = "https://dragonball-api.com/api/characters";

const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(1)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

(async () => {
  console.log("Inicio del proceso !!");
  const response = getCharacters();
  console.log("Llamado Fetch ", response);
  document.getElementById("saveButton").addEventListener("click", SaveContact);

  response.then((data) => {
    console.log("Respuesta de la api DBZ !! ", data);
    loadElements(data.items);
  });

  const tarea = tareaPesada();

  otraTarea()
    .then(() => {
      return otraTarea2();
    })
    .then(() => {
      console.log("async de los componentes cargados!!");
    });

  tarea.then(() => {
    console.log("Tarea pesada terminada");
  });
  console.log("Fin del proceso todos los componentes cargados!!");
})();

function SaveContact() {
  console.log("Contacto guardado !!");
}

async function getCharacters() {
  try {
    const getCharacters = await fetch(url);
    if (!getCharacters.ok) {
      throw new Error("Network response was not ok");
    } else {
      const data = await getCharacters.json();
      return data;
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function loadElements(data) {
  const mainCharacters = document.getElementById("mainCharactersId");
  for (const character of data) {
    const art = document.createElement("article");
    art.classList.add("Articulo");
    mainCharacters.appendChild(art);

    const img = document.createElement("img");
    img.setAttribute("src", character.image);
    img.setAttribute("alt", character.name);
    img.classList.add("Imagenes");
    art.appendChild(img);

    const h2 = document.createElement("h2");
    h2.textContent = character.name;
    art.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = "Race :" + character.race;
    art.appendChild(p);
  }
}

async function tareaPesada() {
  const start = Date.now();
  while (Date.now() - start < 10000) {
    //console.log("Soy la tarea pesada ", Date.now() - start < 1000);
  } // Espera activa de 10 minutos (600,000 ms)
}

async function otraTarea() {
  for (let index = 1; index <= 100; index++) {
    console.log("Voy por el ", index);
  }
  return true;
}

async function otraTarea2() {
  for (let index = 1; index <= 100; index++) {
    console.log("Soy la otra tarea y voy  por el ", index);
  }
  return true;
}
