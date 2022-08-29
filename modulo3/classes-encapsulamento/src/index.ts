//exemplos

//DECLARANDO CLASSES
class Pessoas{
    nome:string//atributo 
    idade: number
    constructor(novoNome:string,novoIdade:number){//parametro
        this.nome=novoNome
        this.idade=novoIdade
    }
    //metrodo
    codar(){
        console.log(this.nome+"codei em POO")
    }
}



//instância da classe ou um objeto-criar um objeto

const erica= new Pessoas("Erica",12)//o new chama a função contrutora

erica.nome
erica.codar()

console.log


//tipagem com classe

const helen:Pessoas = {
    nome:"Helen",
    idade:22,
    codar:()=>{console.log("codei em POO")}
}








//EXERCICIO 1 =============================================
//Transforme o type estudante em uma classe Estudante:

/* type pessoa = {
    nome: string,
    idade: number
} */

class Pessoa{
    nome: string
    idade: number
    constructor(novoNome:string,novaIdade:number){
        this.nome=novoNome,
        this.idade=novaIdade

    }
}

const Marina= new Pessoa("Marina",33)


//EXERCICIO 2 =============================================
class Estudante {
    //1 - Torne as propriedades da classe Estudantes privadas. 
   private nome: string
   private matricula: number

    constructor(novoNome: string, novaMatricula: number){
        this.nome = novoNome
        this.matricula = novaMatricula
    }

    //2 - Adicione os getters para pegar o nome ou matrícula do estudante  e setters para alterar a matrícula do estudante.


    public getName(){
        console.log(this.nome)
        return this.nome
    }

    
    public getMatricula(){
        console.log(this.matricula)
        return this.matricula
    }

    public setName(
        newNome: string
    ):void{
        this.nome =newNome
    }

    public setMatricula(
        newMatricula: number
    ):void{
        this.matricula =newMatricula
    }


}

//3 - Crie uma instância da classe Estudante
const Monteiro = new Estudante("Monteiro ",133)



//4 - imprima o nome e matrícula do estudante criado.
console.log(Monteiro.getName())
Monteiro.setName("Maria Monteiro")
console.log(Monteiro.getName())