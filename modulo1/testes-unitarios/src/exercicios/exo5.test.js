import { alterarFrase } from "./exo5";

describe("alterar letras iniciais das palavras para maiuscula", () => {
    it('recebe ola retorna Ola', () =>{
        const alterar =alterarFrase('ola');
        expect(alterar).toEqual('Ola')

    })

    it('recebe "ola, mundo" retorna "ola, mundo"', () =>{
        const alterar =alterarFrase('ola, mundo');
        expect(alterar).toEqual("Ola, Mundo")

    })

    it('recebe "eu sou o bob, aluno da labenu" retorna "Eu Sou O Bob, Aluno Da Labenu"', () =>{
        const alterar =alterarFrase('eu sou o bob, aluno da labenu');
        expect(alterar).toEqual("Eu Sou O Bob, Aluno Da Labenu")

    })


});