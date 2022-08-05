//boolean
//string
//number
//tuple(array onde a gente sabe o numero de itens dentro dele e oque eu espero desses itens ) ex
let title:[number,string,boolean]
title = [1,"",true]
//enum-uso como um apelido pra algo por exemplo eu quero usar a cor branca na minha aplicação essa cor é passada por hexadecimal o usuario não sabe qual o numero do branco em exadecimal mas com o enum se ele colocar branco vai ser o mesmo que digitar a cor 
enum Color{
    white = '#fff',
    black ='#000'
}

//any-qualquer coisa--mas evite usar
//void-vazio que não retorna nada
//null/undefined
//never-para quando eu vou retornar um erro , ele não retorna nada ,não tem retorno nenhum
//object-qualquer coisa que não seja nada acima

//type inference-eu não preciso declarar o tipo pq quando eu declaro já coloco um valor que assume o typo da var neste caso string
let message2 = "mensagem"
message2="hdgusd"

//type union-união de dois tipos em uma var
const cep:number|string=""

//type aliases
type uid=number|string
type plataforma="Windows"|"Linux"

//type Aliases com Intersection
type AccountInfo ={
    id:number;
    name:string;
    email?:string;
}

type CharInfo = {
    nickname:string;
    level:number
}

//aqui eu junto dois Aliases em um novo tipo
type PlayerInfo = AccountInfo & CharInfo

//classes

//crio uma classe e passo os parametros
class UserAccount{
    name:string;
    age:number;
    //depois crio um método que é o constructor que passo como parametros nome e idade para poder criar meu objeto
    constructor(name:string, age:number){
        this.name =name;
        this.age = age;
    }
}

const dany= new UserAccount("Danyelle",27);
console.log(dany)

