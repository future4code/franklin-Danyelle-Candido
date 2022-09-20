import { performPurchase } from "../src"

describe("Testando a função PerformPurchase", () => {
    test("Deve retornar usuário com saldo atualizado depois da compra", () => {
        const user = {name:"jose",balance:100}
        const value = 10
        const result = performPurchase(user,value)
        expect(result).toEqual({name:"jose",balance:90})
    })

    test("Deve retornar usuário com saldo atualizado depois da compra", () => {
        const user = {name:"mauricio",balance:100}
        const value = 100
        const result = performPurchase(user,value)
        expect(result).toEqual({name:"mauricio",balance:0})
    })

    test("Deve retornar undefined", () => {
        const user = {name:"nelson",balance:10}
        const value = 100
        const result = performPurchase(user,value)
        expect(result).toEqual(undefined)
    })
})