const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

async function myPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Sergio");
    }, 2000); // Simula un retraso de 1 segundo
  });
}

async function aliceAnimation() {
  console.log("Inicio de la ejecución");
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");
  const alice4 = document.querySelector("#alice4");
  const promise = alice1.animate(aliceTumbling, aliceTiming);
  console.log("animación 1");

  promise.finished
    .then(() => {
      console.log("animación 2 en proceso");
      return alice2.animate(aliceTumbling, aliceTiming).finished;
    })
    .then(() => {
      console.log("animación 3 en proceso");
      return alice3.animate(aliceTumbling, aliceTiming).finished;
    })
    .then(() => {
      console.log("animación 4 en proceso");
      alice4.animate(aliceTumbling, aliceTiming);
    })
    .then(() => {
      console.log("Me ejecuto sin esperar que termine la animación de alice4");
      return myPromise();
    })
    .then((resultado) => {
      alert("I'm a " + resultado + "' promise");
    })
    .catch((eror) => {
      console.log(eror);
    });
}

aliceAnimation();
// Simulando una tarea sincrónica que toma 10 minutos
function tareaPesada() {
  const start = Date.now();
  while (Date.now() - start < 10000) {} // Espera activa de 10 minutos (600,000 ms)
}
tareaPesada();
tareaPesada();
tareaPesada();

console.log("Código después de la tarea pesada");
