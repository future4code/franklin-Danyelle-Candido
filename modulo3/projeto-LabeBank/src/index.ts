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

    const novaConta : correntista ={
        cpf,
        name,
        dataNascimento,
        saldo:0,
        extrato:[],
    }

    listarCorrentistas?.push(novaConta)

    res.status(201).send(listarCorrentistas)

})