import { Ordenar } from "./exo4";

describe("Organizar numeros ", () => {
    it('retorna [3, 2, 1]', () =>{
        const ordenarLista =Ordenar([3, 2, 1]);
        expect(ordenarLista).toEqual([1, 2, 3])

    })

    it('retorna [4, 7, 1, 3]', () =>{
        const ordenarLista =Ordenar([4, 7, 1, 3]);
        expect(ordenarLista).toEqual([1, 3, 4, 7])

    })

    it('retorna [20, -1, -4, 0, 6]', () =>{
        const ordenarLista =Ordenar([20, -1, -4, 0, 6]);
        expect(ordenarLista).toEqual([-4, -1, 0, 6, 20])

    })


});
