import { template } from "../../src/js-foundation/01-template";

describe('Template Test', ()=>{
    test('Template contains a salute', () =>{
        expect(template).toContain('Hi, ')
        expect(template).toMatch(/Thank you/)
    })
})