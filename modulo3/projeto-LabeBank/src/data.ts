export type extrato= {
    valor: number,
    data: string,
    descricao: string
  }
  
 export type correntista= {
    cpf: string,
    name:string,
    dataNascimento:string,
    saldo: number,
    extrato: extrato[]
  }
  
    export const correntistas:correntista[] = [
      {
        cpf: "332.455.655-28",
        name:"Maria Regina",
        dataNascimento:"03/05/1995",
        saldo: 50.00,
        extrato:[
            {
                valor: 10,
                data:"03/02/2022",
                descricao: "chocolateria"
            }
        ]
      },
      {
        cpf: "222.465.654-28",
        name:"Flavio José",
        dataNascimento:"20/05/1990",
        saldo: 5000.00,
        extrato:[
            {
                valor: 100,
                data:"03/07/2022",
                descricao: "mercado do seu José"
            }
        ]
      }
  ]