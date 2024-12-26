
const button = document.getElementById("save");
const listCode = document.querySelector("listCode");
button.addEventListener("click", (event) => {

  button.textContent = `Dame click,`;

  const elementos = document.querySelectorAll('h1');

  // Recorrer y modificar
  elementos.forEach(li => {
      li.textContent = 'Nuevo item'+random(8); // Cambia a texto fijo
  });

});


function random(number) {
    return Math.floor(Math.random() * number);
}


  const divRoot = document.getElementById("iframeCode");
  const root = ReactDOM.createRoot(divRoot);

  const NewRender = () => {
    return (
      <React.Fragment>
        <h1>Hola Mundo 1</h1>
        <h1>Hola Mundo 2</h1>
        <h1>Hola Mundo 3</h1>
        <h1>Hola Mundo 3</h1>
        <h1>Hola Mundo 3</h1>
        <h1>Hola Mundo 3</h1>
        <button>Save</button>
        </React.Fragment>
    );
  };

  root.render(NewRender());