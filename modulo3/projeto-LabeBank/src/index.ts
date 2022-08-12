import express, { Request, Response} from 'express'
import cors from 'cors'
import { correntistas, correntista,extrato } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003 view documentation " )
})

//listar correntistas
app.get('/listUsers',(req:Request,res:Response)=>{
    
    const listarCorrentistas = correntistas
    
    
    res.status(201).send(listarCorrentistas)

})

app.get('/listUsers/:cpf',(req:Request,res:Response)=>{
    const cpf =req.params.cpf
    const listarCorrentistas = correntistas.find((correntista)=> correntista.cpf ===cpf   )

    const name = listarCorrentistas?.name
    const saldo = listarCorrentistas?.saldo

    res.status(201).send(`${name} seu saldo é ${saldo}`)

})

//criar conta
app.post('/createAccount',(req:Request,res:Response)=>{
    
    const listarCorrentistas = correntistas
    const {cpf,name,dataNascimento} = req.body

    function maiorIdade(dataNascimento:string):boolean{
        
        const d = new Date()//peguei a data atual completa mas ela vem com horas e fora do formato que eu espero
        const diaAtual = d.getDate()
        const mesAtual = d.getMonth()+1//acrescento mais um pq ele conta de 0 a 11
        const anoAtual = d.getFullYear()
        
        const n = dataNascimento.split("/")//separando por barra
        const diaNascimento = Number(n[0])
        const mesNascimento = Number (n[1])
        const anoNascimento = Number(n[2])


        if((anoAtual-anoNascimento)>18){
            return true
        }else if((anoAtual-anoNascimento)===18 && mesAtual>mesNascimento) {
            return true
        }else if((anoAtual-anoNascimento)===18 && mesAtual===mesNascimento && diaAtual>=diaNascimento ) {
            return true
        }else{
            return false
        }
        
    }

    function contaExistente(listarCorrentistas:correntista[]):boolean{
        let contaexistente:boolean =false

        for(let i =0; i<listarCorrentistas.length;i++){
            if(listarCorrentistas[i].cpf === cpf){
                contaexistente = true
            }
        }

        return contaexistente
        
    }

    if(contaExistente(listarCorrentistas)){
        res.status(400).send({message:"Conta existente, o usuário já possui conta na Labebank entre em contato com (11)111111 para mais informações"})
    }else if(maiorIdade(dataNascimento)){

        const novaConta : correntista ={
            cpf,
            name,
            dataNascimento,
            saldo:0,
            extrato:[],
        }

        listarCorrentistas?.push(novaConta)

        res.status(201).send(listarCorrentistas)

    }else{
        res.status(400).send({message:"Não autorizada a abertura de conta para menores de 18 anos"})
    }

})