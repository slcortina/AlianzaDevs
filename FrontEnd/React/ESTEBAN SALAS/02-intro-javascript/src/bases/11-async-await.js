const getImagen = async() => {
    try {
        const apiKey = 'lRxxbWkRBiJyvNLpxGS8RN9GLr64nGwJ';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = await data.images.original;

        const imagen = document.createElement('img');
        imagen.src = url;

        document.body.append(imagen);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getImagen();