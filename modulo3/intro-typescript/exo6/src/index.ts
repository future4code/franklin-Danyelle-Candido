function operacoesMatematicas(a:number,b:number):Array<object> {
    let soma:number=a+b
    let subt:number=a-b
    let mult:number=a*b
    let maiorNum:number=0

    if(soma>maiorNum){
        maiorNum=soma
    }
    if(subt>maiorNum){
        maiorNum=subt
    }
    if(mult>maiorNum){
        maiorNum=mult
    }

    return [{soma},{subt},{mult},{maiorNum}]

}//escreva o seu código aqui

console.log(operacoesMatematicas(4,3))