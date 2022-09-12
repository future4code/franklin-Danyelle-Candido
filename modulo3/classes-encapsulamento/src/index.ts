//EXEMPLOS

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

//EXEMPLO EXERCICIO 1 =============================================
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


//EXEMPLO EXERCICIO 2 =============================================
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

///////////////////EXERCICIO 1////////////////////////
//A)O CONSTRUTOR DENTRO DE UMA CLASSE SERVE PARA INICIAR A FUNÇÃO NO MOMENTO EM QUE UMA CLASSE É INVOCADA.SÃO BASICAMENTE FUNÇÕES DE INICIALIZAÇÃO DE UMA CLASSE, AS QUAIS SÃO INVOCADAS NO MOMENTO EM QUE OBJETOS DESTA CLASSE SÃO CRIADAS. 

//B)É chamado uma vez

//C)conseguimos ter acesso através dos getters and setters 


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  


  }


///////////////////EXERCICIO 2////////////////////////

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string
    ){
        console.log("Chamando o construtor da classe UserAccount")
        this.description = description;
        this.value = value;
        this.date = date;
     }


     public getDescription(){
        console.log(this.description)
        return this.description
    }

    
    public getValue(){
        console.log(this.value)
        return this.value
    }

    public getDate(){
        console.log(this.date)
        return this.date
    }

    public setDescription(
        newDescription: string
    ):void{
        this.description =newDescription
    }

    public setValue(
        newValue: number
    ):void{
        this.value =newValue
    }

    public setDate(
        newDate: string
    ):void{
        this.date =newDate
    }

  }



///////////////////EXERCICIO 3////////////////////////

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    public getAccount(){
        console.log(this.accounts)
        return this.accounts 
    }

    public setAccount(
        newAccounts: any
    ):void{
        this.accounts =newAccounts
    }
  
  }

  const pagamento= new Transaction("motoboy",150,"10-08-2022")

  const Joana= new UserAccount("2231546","Joana",12)

  





