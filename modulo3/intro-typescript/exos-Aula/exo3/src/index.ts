//declarando um tipo, que neste caso é um "objeto generico " que usarei dentro de outro objeto

type Carro ={
    marca:string,
    cor:string
}

//vdeclarando objetos que recebem o tipo carro
const mustang: Carro ={
    marca:'Ford',
    cor:'rosa'
}

const gol: Carro ={
    marca:'volkswagem',
    cor:'preto'
}


//declarando um arra que sera do tipo carro 
const frota: Array<Carro> = []
//puchando as variaveis de carro para esse array
frota.push(mustang);
frota.push(gol);

//declarando minha função buscar carros que vai receber duas propriedades minha frota que é do tipo carro e a marca que é do tipo string , isso retornará um array do tipo carro
function buscarCarrosPorMarca(frota:Carro[],marca:string):Array<Carro>{
    //se a marca for undefined ele retorna a frota inteira
    if(marca === undefined){
        return frota
    }
    //se não ele filtra o nome do carro e retorna o objeto
    return frota.filter((carro): boolean => {
            return carro.marca === marca
        }
    )
}

console.log(buscarCarrosPorMarca(frota,'Ford'))