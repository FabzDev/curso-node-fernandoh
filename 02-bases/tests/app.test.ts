// A A A
describe('Test in the App file', ()=> {
    test('should be 30', () => {

        // A: arrange, hacer arreglos para preparar nuestra prueba.
        const a = 10;
        const b = 20

        //A: act,hacer el algoritmo al que posteriormente le verificaremos el resultado.
        const result = a + b; 

        //A: assert, revisar si el resultado obtenido es el esperado.
        expect(result).toBe(30)
    })
})