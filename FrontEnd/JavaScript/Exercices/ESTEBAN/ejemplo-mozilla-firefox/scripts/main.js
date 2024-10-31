let miImage = document.querySelector("img");
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");


miImage.onclick = function(){
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "images/firefox-icon.png"){
        miImage.setAttribute("src", "images/champions.png");
    } else {
        miImage.setAttribute("src", "images/firefox-icon.png");
    }
};


if (!localStorage.getItem("nombre")){
    establecerNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
}


miBoton.onclick = function() {
    establecerNombreUsuario();
}


function establecerNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
    }
}
  