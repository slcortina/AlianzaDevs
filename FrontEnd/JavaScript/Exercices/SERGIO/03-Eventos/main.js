(() => {
  const main = document.querySelector("main");
  main.setAttribute(
    "style",
    "display:grid; gap:5px;grid-template-columns:repeat(5, 1fr);"
  );
  for (let i = 0; i < 20; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "flex:1 1 10px;margin: 10px;padding: 20px;");
    main.appendChild(div);
  }
})();
const main = document.querySelector("main");
const small = document.getElementById("mainId");
main.addEventListener("click", (event) => {
  //event.stopPropagation();
  event.currentTarget.style.backgroundColor = `rgb(${random(255)}, ${random(
    255
  )}, ${random(255)})`;
  //event.stopPropagation();
  small.textContent += `Hiciste clic en un elemento ${event.target.tagName}\n`;
});

const divs = document.querySelectorAll("div");
const smallDiv = document.getElementById("divId");
for (const div of divs) {
  div.addEventListener("click", (event) => {
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = `rgb(${random(255)}, ${random(
      255
    )}, ${random(255)})`;

    smallDiv.textContent += `Hiciste clic en un elemento ${event.target.tagName}\n`;
  });
}

function random(number) {
  return Math.floor(Math.random() * number);
}
