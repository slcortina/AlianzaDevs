const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

function doAnimationAlice1(aliceTumbling, aliceTiming, callback) {
  const alice = document.querySelector("#alice1");
  const promise = alice.animate(aliceTumbling, aliceTiming);
  promise.finished
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.error("Ha ocurrido un error ", error);
    });
}
function doAnimationAlice2(aliceTumbling, aliceTiming, callback) {
  const alice = document.querySelector("#alice2");
  alice
    .animate(aliceTumbling, aliceTiming)
    .finished.then(() => {
      callback();
    })
    .catch((error) => {
      console.error("Ha ocurrido un error ", error);
    });
}

function doAnimationAlice3(aliceTumbling, aliceTiming, callback) {
  const alice = document.querySelector("#alice3");

  alice
    .animate(aliceTumbling, aliceTiming)
    .finished.then(() => {
      //throw new Error(`Error test`);
      callback();
    })
    .catch((error) => {
      console.error("Ha ocurrido un error ", error);
    });
}
function doAnimationAlice4(aliceTumbling, aliceTiming, callback) {
  const alice = document.querySelector("#alice4");
  alice
    .animate(aliceTumbling, aliceTiming)
    .finished.then(() => {
      callback();
    })
    .catch((error) => {
      console.error("Ha ocurrido un error ", error);
    });
}

function aliceAnimation() {
  doAnimationAlice1(aliceTumbling, aliceTiming, () => {
    doAnimationAlice2(aliceTumbling, aliceTiming, () => {
      doAnimationAlice3(aliceTumbling, aliceTiming, () => {
        doAnimationAlice4(aliceTumbling, aliceTiming, () => {
          alert("Ha finalizado la animación con callback");
        });
      });
    });
  });
}

aliceAnimation();
