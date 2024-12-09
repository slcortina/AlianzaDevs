const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button'); 

const img1 = "images/pic1.jpg";
const img2 = "images/pic2.jpg";
const img3 = "images/pic3.jpg";
const img4 = "images/pic4.jpg";
const img5 = "images/pic5.jpg";

let imagenesArray = [img1,img2, img3, img4, img5];

imagenesArray.forEach((imagen) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imagen);

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', imagen);
    });

    thumbBar.appendChild(newImage); // Agregar la miniatura a thumbBar
});

btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        displayedImage.style.filter = 'brightness(50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        displayedImage.style.filter = 'brightness(100%)';
    }
});



