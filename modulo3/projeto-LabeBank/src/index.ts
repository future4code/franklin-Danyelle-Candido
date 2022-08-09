type conta={
    nome:string,
    cpf:string,
    dataNasc:number
}

type compra={
    valor:number,
    data:number,
    descricao:string
}

let maiorDeIdade:boolean=false
const usuarios:Array<conta>=[]
const nome:string=""
const cpf:string=""
const dataNasc:string=""
const saldo:number=0
const extrato:Array<compra>=[]
const id:string=cpf

function validarIdade(age:number):void{
    if(age>=18){
        maiorDeIdade=true;
    }
}

function criarConta(){

}

function pegarSaldo(){

}

function AdicionarSaldo(){

}

function PagarConta(){

}

function transfInterna(){

}



console.log("Hello Bank")