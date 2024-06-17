import { httpClientPlugin } from '../plugins'

export const getPokemon: (id:number) => Promise<string> = async( id: number ) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
        const pokemon = await httpClientPlugin.get( url );
        return pokemon.name;
    } catch (error) {
        throw 'Pokemon no encontrado en la pokedex';
    }
   
}



// function getPokemon( id ){
//     const url = `https://pokeapi.co/api/v2/pokemon/${ id }`
//     return fetch(url)
//     .then( rawPokemon => rawPokemon.json())
//     .then( pokemon => pokemon.name)
// }