import express, { Request, Response} from 'express'
import cors from 'cors'
import { posts } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

type postagens= {
    "userId": number,
    "id": number,
    "title": string,
    "body":string
  }

app.get('/feedpage',(request:Request,response:Response)=>{
    //retorna uma resposta ao user com o status 200 e envia oq esta no send ()
    const feed:postagens[] =posts
    response.status(202).send(feed)
})


app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})//aqui  eu falo que meu app esta escutando (rodando) na porta 3003 e faço uma arrow function callback mostrando onde ele esta rodando
