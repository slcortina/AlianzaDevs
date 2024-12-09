import {getHeroesId}  from "./bases/08-imp-exp.js";
// const promesa = new Promise((resolve,reject)=>{
//     setTimeout(()=> {

//         const heroes = getHeroesId(1);
//         // console.log(heroes);
//         resolve(heroes);
//     },2000);
// });

// promesa.then((heroe) => {
//     console.log('then de la promesa heroe', heroe);
// });

const getHeroreByIdAsync = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const heroe = getHeroesId(id);
            if (heroe){
                resolve(heroe);
            } else {
                reject('No existe el heroe...');
            }
        }, 2000);
    });
}

getHeroreByIdAsync(2).then(console.log).catch(console.error);
