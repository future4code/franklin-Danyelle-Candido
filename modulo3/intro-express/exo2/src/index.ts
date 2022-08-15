import express, { Request, Response} from 'express'
import cors from 'cors'
import { users } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

type usuario = {
    "id": number,
    "name": string,
    "phone": string,
    "email": string,
    "website": string

  }

app.get('/usuarios',(request:Request,response:Response)=>{
    //retorna uma resposta ao user com o status 200 e envia oq esta no send ()
    const trazerUser:usuario[] =users 
    response.status(202).send(trazerUser)
})


app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})//aqui  eu falo que meu app esta escutando (rodando) na porta 3003 e faço uma arrow function callback mostrando onde ele esta rodando
