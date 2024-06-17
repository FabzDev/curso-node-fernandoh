import { getAge } from "../../src/plugins/getAge.plugin"

describe( 'getAge.plugin.test.ts', () => {

    test('getAge() devuelve la edad correcta', ()=>{
        const miEdad = getAge('04-04-1990');
        expect(miEdad).toBe(34)
    })

    test('getAge() devuelve 0 si el año de necimiento es igual al año actual', ()=>{
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(90);
        
        expect(getAge('04-04-1990')).toBe(0);
    })
})