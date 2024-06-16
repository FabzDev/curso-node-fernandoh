import { heroesArr } from "../../src/js-foundation/02-destructure"

describe('02-destructure.test.ts', ()=>{
    test('heroesArr contains Flash and Superman', ()=>{
        expect(heroesArr).toContain('Flash');
        expect(heroesArr).toContain('Superman');
    })

    test('heroesArr contains first Flash, and second Batman', ()=>{
        
        const [flash, batman] = heroesArr;

        expect(flash).toEqual('Flash');
        expect(batman).toEqual('Batman');
    })
})