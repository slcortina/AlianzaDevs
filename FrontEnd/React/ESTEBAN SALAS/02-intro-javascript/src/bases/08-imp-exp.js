import {heroes} from '../data/heroes.js'

// const getHeroesId = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id){
//             return true
//         } else {
//             return false
//         }
//     })
// } 

export const getHeroesId = (id) =>  heroes.find((heroe) => heroe.id === id)

// console.log(getHeroesId(2))


const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

// console.log(getHeroesByOwner('DC'))



