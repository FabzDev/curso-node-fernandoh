import { findName } from "../../src/js-foundation/03-callbacks";

describe('03-callbacks.test.ts', ()=>{
    test('Function findName throws an error if user is not found', (done)=>{
        const id = 8;
        findName(id, (user , error) => {
            expect(error).toBe("❌ ERROR!!! No se encontro el usuario!");
            expect(user).toBeUndefined;
            done();
        })
    })

    test('Function findName returns "Fabio" obj if user is the id is 1', ()=>{
        const id = 1;
        findName(id, (user, error) => {
            expect(user).toStrictEqual({ id: 1, name: "Fabio"});
            expect(error).toBeUndefined;
        })
    })
})