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

function aliceAnimation() {
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");
  const alice4 = document.querySelector("#alice4");
  const promise = alice1.animate(aliceTumbling, aliceTiming);

  promise.finished
    .then(() => {
      return alice2.animate(aliceTumbling, aliceTiming).finished;
    })
    .then(() => {
      return alice3.animate(aliceTumbling, aliceTiming).finished;
    })
    .then(() => {
      setTimeout(() => {}, 4000); // Simula un retraso de 1 segund
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
