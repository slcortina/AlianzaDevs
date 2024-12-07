import heroes, { name } from "./data/heroes";

console.log(...heroes);
console.log(name);

const apiKey = "fYOXXo0hEkgpAap1r6eS06w0YoE66blu";

const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(({ data }) => {
    console.log(data);
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  });
