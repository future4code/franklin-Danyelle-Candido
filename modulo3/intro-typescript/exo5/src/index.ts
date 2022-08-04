function checaRenovacaoRG(atual:number,nasc:number,emissao:number):boolean {
    const anoAtual:number = atual
    const anoNascimento:number = nasc
    const anoEmissao:number = emissao
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }

 if(checaRenovacaoRG(2022,1995,2010)){
    console.log("Renovar RG")
 }else{
    console.log("RG esta dentro do prazo de validade")
 }

 