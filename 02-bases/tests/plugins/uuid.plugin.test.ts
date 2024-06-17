import { uuid } from '../../src/plugins/uuid.plugin';

describe('uuid.plugin.test.ts', ()=>{

    test('El UUID recibido cumple con el formato UUID (string y 36 chars)', ()=>{
        
        const uuidTesting = uuid();
        expect(typeof uuidTesting).toBe('string');
        expect(uuidTesting.length).toBe(36);

    })
})