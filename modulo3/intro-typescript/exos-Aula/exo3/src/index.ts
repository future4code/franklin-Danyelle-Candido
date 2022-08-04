const frota: Array<object> = [
    {
        marca:'Ford',
        cor:'azul'
    },
    {        
        marca:'Ford',
        cor:'rosa'
    },
    {       
        marca: false,
        cor:'azul'
    }
]


function buscarCarrosPorMarca(frota:Array<any>,marca:string):Array<object>{
    if(marca === undefined){
        return frota
    }
    return frota.filter(
            (carro): boolean => {
            return carro.marca === marca
        }
    )
}

buscarCarrosPorMarca(frota,'Ford')
console.log(buscarCarrosPorMarca(frota,'Ford'))