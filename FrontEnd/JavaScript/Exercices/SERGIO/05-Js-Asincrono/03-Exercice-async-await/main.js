const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

function animacion1() {
  const alice1 = document.querySelector("#alice1");
  return alice1.animate(aliceTumbling, aliceTiming).finished;
}
function animacion2() {
  const alice2 = document.querySelector("#alice2");
  return alice2.animate(aliceTumbling, aliceTiming).finished;
}
function animacion3() {
  const alice3 = document.querySelector("#alice3");
  return alice3.animate(aliceTumbling, aliceTiming).finished;
}
function animacion4() {
  const alice4 = document.querySelector("#alice4");
  return alice4.animate(aliceTumbling, aliceTiming);
}

async function aliceAnimation() {
  console.log("Inicio de la ejecución");
  try {
    await animacion1();
    console.log("tales");
    await animacion2();
    await animacion3();
    await animacion4();
  } catch (error) {
    console.log(eror);
  }
}

aliceAnimation();
console.log("tales 2");
