import { getAge } from "../../src/plugins/getAge.plugin"

describe( 'getAge.plugin.test.ts', () => {
    test('getAge() devuelve la edad correcta', ()=>{
        const miEdad = getAge('04-04-1990');
        expect(miEdad).toBe(34)
    })
})