import { verifyAge ,LOCATION,NACIONALITY} from "../src"


describe("Testando a função VerifyAge", () => {
    test("Deve retornar usuário brasileiro que pode entrar no estabelecimento BR", () => {
        const casino= {name:"casinoBR",location: LOCATION.BRAZIL}
        const user = {name:"jose",age:18,nacionality: NACIONALITY.BRAZILIAN}
        const result = verifyAge(casino,[user])
        expect(result.brazilians.allowed).toEqual(["jose"])
    })
    test("Deve retornar usuário americano que pode entrar no estabeleciment BR", () => {
        const casino= {name:"casinoBR2",location: LOCATION.BRAZIL}
        const user = {name:"jose",age:21,nacionality: NACIONALITY.BRAZILIAN}
        const result = verifyAge(casino,[user])
        expect(result.brazilians.allowed).toEqual(["jose"])
    })
    test("Deve retornar usuários não pode entrar no estabelecimento US", () => {
        const casino= {name:"casinoUS",location: LOCATION.EUA}
        const user = [{name:"jose",age:19,nacionality: NACIONALITY.BRAZILIAN},{name:"janaina",age:19,nacionality: NACIONALITY.AMERICAN},{name:"maria",age:19,nacionality: NACIONALITY.AMERICAN},{name:"jaqueline",age:19,nacionality: NACIONALITY.BRAZILIAN}]
        const result = verifyAge(casino,user)
        expect(result.brazilians.unallowed).toEqual(["jose","jaqueline"])
        expect(result.americans.unallowed).toEqual(["janaina","maria"])
    })
    test("Deve retornar usuário brasileiro não podem entrar no estabelecimento US e os Americanos podem", () => {
        const casino= {name:"casinoUS2",location: LOCATION.EUA}
        const user = [{name:"josias",age:19,nacionality: NACIONALITY.BRAZILIAN},{name:"marivalda",age:21,nacionality: NACIONALITY.AMERICAN},{name:"nunes",age:21,nacionality: NACIONALITY.AMERICAN},{name:"josenildo",age:19,nacionality: NACIONALITY.BRAZILIAN}]
        const result = verifyAge(casino,user)
        expect(result.americans.allowed).toEqual(["marivalda","nunes"])
        expect(result.brazilians.unallowed).toEqual(["josias","josenildo"])
    })

})