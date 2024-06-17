import { buildPersonFactory } from "../../src/js-foundation/05-factory-functions"

// 05-factory-functions.test.ts'
describe("05-factory-functions.test.ts", ()=>{
    const uuidPlug =  () => '12345'
    const agePlug = () => 35

    const personFactory = buildPersonFactory({ uuidPlug, agePlug });

    test('buildpersonFactoryFunction returns a function', () => {
        expect(typeof personFactory).toBe('function')
    })

    test('buildPersonFunction returns a person', ()=>{
        // A: arrange

        // A: act
        const fabio = personFactory("Fabio", "04-04-1990");
        
        // A: assert
        expect(fabio).toEqual({
            id: '12345',
			name: 'Fabio',
			birthday:'04-04-1990',
			age: 35,
        })
    })
})