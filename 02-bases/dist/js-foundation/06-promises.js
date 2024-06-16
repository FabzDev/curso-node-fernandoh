"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemon = void 0;
const plugins_1 = require("../plugins");
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await plugins_1.httpClientPlugin.get(url);
    return pokemon.name;
};
exports.getPokemon = getPokemon;
// function getPokemon( id ){
//     const url = `https://pokeapi.co/api/v2/pokemon/${ id }`
//     return fetch(url)
//     .then( rawPokemon => rawPokemon.json())
//     .then( pokemon => pokemon.name)
// }
