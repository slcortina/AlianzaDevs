//Inicializar variables
let randomNumber = GetRandomNumber();
let guessed = false;

console.log(randomNumber);

//Se cargan los datos y configuración inicial del juego.
LoadInitialData();

function Adivinar() {
  if (guessed) return alert("Juego terminado!!");
  const numeroEnviado = document.getElementById("guessFieldId").value;
  if (!isNaN(numeroEnviado) && numeroEnviado.trim() !== "") {
    if (encryptNumber(numeroEnviado) == randomNumber) {
      guessed = true;
      AddAttempt(numeroEnviado, guessed);
      document.getElementById("imgId").style.display = "none";
      return;
    } else {
      guessed = false;
      AddAttempt(numeroEnviado, guessed);

      document
        .querySelector("img")
        .setAttribute(
          "src",
          numeroEnviado > decryptNumber(randomNumber)
            ? "img/arriba.png"
            : "img/abajo.png"
        );
      document.getElementById("imgId").style.display = "block";
    }
  } else {
    alert("Ingrese un numero valido " + numeroEnviado);
  }
}

function LoadInitialData() {
  const guessSubmit = document.getElementById("guessSubmitId");
  guessSubmit.addEventListener("click", Adivinar);

  const resetSubmit = document.getElementById("resetSubmitId");
  resetSubmit.addEventListener("click", Reset);
}

function Reset() {
  guessed = false;
  intentos = [];
  randomNumber = GetRandomNumber();
  document.getElementById("guessFieldId").value = "";
  document.getElementById("imgId").style.display = "none";
  document.getElementById("container").textContent = "";
  console.log(randomNumber);
}

function GetRandomNumber() {
  return encryptNumber(Math.floor(Math.random() * 100) + 1);
}

function AddAttempt(number, guessed) {
  const container = document.getElementById("container");
  // Crear un div para cada número
  const box = document.createElement("div");
  box.classList.add(guessed ? "boxDone" : "box"); // Agregar clase "box"
  box.textContent = number; // Mostrar el número dentro del cuadro

  // Agregar el cuadro al contenedor
  container.appendChild(box);
}
