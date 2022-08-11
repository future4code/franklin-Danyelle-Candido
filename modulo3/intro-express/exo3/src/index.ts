import express, { Request, Response} from 'express'
import cors from 'cors'
import { produtos } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

type produtos = {
    "id": number,
    "name": string,
    "valor": number,
    "em estoque": boolean
  }

app.get('/produtos',(request:Request,response:Response)=>{
    //retorna uma resposta ao user com o status 200 e envia oq esta no send ()
    const listarProdutos:produtos[] =produtos 
    response.status(202).send(listarProdutos)
})


app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})//aqui  eu falo que meu app esta escutando (rodando) na porta 3003 e faço uma arrow function callback mostrando onde ele esta rodando
