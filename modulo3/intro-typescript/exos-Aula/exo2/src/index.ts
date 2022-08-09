console.log("Hello ts config")
//var
let nome: string="Danyelle";
let idade: number=18;
console.log(nome+idade)

//array
const desejos: Array<string>=["amor","saúde", "paz"];
const sorte: number[]=[1,2,3];
console.log(desejos)
console.log(sorte)

//objeto
const pessoa:{nome:string, idade:number}={
    nome: "Danyelle",
    idade: 16
}
console.log(pessoa)


//any
let aux:any
aux="hello"
aux=0
console.log(aux)
aux= true
console.log(aux)

//funções tipadas
function sum (n1:number,n2:number):number{
    return n1+n2;
}


console.log(sum(1,2))

//função void -que não retorna nada
function soma (n1:number,n2:number):void{
    sorte.push(n1+n2)
}
soma(2,5)
console.log(sorte)
console.log("..........")
console.log(soma)

//metodos(funções) e callbacks

//eu chamo meu metodo "sayHello" dentro do meu objeto e declaro que ele vai receber como paramentro um nome que é uma string e com => informo que vai ser uma função void que não retornará nada
const pessoaMetodo:{nome:string, idade:number,sayHello:(nome:string)=>void}={
    nome: "Danyelle",
    idade: 16,
    sayHello: function(nome){
        console.log("oi"+ nome)
    }
}
console.log(pessoaMetodo)

//callbacks
function somaNum(a:number,b:number,callback?:()=>void):number{
    return a+b;
}
const novoArray:number[] = [...sorte,somaNum(1,2)];

console.log(novoArray)


