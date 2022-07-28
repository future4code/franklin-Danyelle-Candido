import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it('retorna true para [1, 2 ,1]', () =>{
        const itensDuplicados =checaItensDuplicados([1, 2 ,1]);
        expect(itensDuplicados).toEqual(true)

    })

    it('retorna true para ["a", "a", "b", "c"]', () =>{
        const itensDuplicados =checaItensDuplicados(["a", "a", "b", "c"]);
        expect(itensDuplicados).toEqual(true)

    })

    it('retorna true para [5, 5, 3, 6, 5, 6]', () =>{
        const itensDuplicados =checaItensDuplicados([5, 5, 3, 6, 5, 6]);
        expect(itensDuplicados).toEqual(true)

    })

    it('retorna true para [1,1,2,3]', () =>{
        const itensDuplicados =checaItensDuplicados([1,1,3,4]);
        expect(itensDuplicados).toEqual(true)

    })

    it('retorna false para [1, 2, 3]', () =>{
        const itensDuplicados =checaItensDuplicados([1, 2, 3]);
        expect(itensDuplicados).toEqual(false)

    })

    it('retorna false para [1]', () =>{
        const itensDuplicados =checaItensDuplicados([1]);
        expect(itensDuplicados).toEqual(false)

    })

    it('retorna false para []', () =>{
        const itensDuplicados =checaItensDuplicados([]);
        expect(itensDuplicados).toEqual(false)

    })

    it('retorna false para ["f", "d", "e","F"]', () =>{
        const itensDuplicados =checaItensDuplicados(["f", "d", "e","F"]);
        expect(itensDuplicados).toEqual(true)

    })

});
