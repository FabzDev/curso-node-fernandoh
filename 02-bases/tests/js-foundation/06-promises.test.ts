import { getPokemon } from "../../src/js-foundation/06-promises"

describe('06-promises.test.ts', () => {
    test('getPokemon returns bulbasor using id 1', async () => {
        
        const myPokemonName = await getPokemon(1);
        expect(myPokemonName).toBe('bulbasaur')
        
    })

    test('getPokemon returns an error if the Pokemon is not found', async ()=> {
        try {
            await getPokemon(10000);
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe('Pokemon no encontrado en la pokedex')
        }
    })
})