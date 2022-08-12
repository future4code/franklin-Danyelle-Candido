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

    if(maiorIdade(dataNascimento)){

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