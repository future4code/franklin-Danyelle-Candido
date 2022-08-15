import express, { Request, Response} from 'express'
import cors from 'cors'
import { userAndPosts } from "./data"//achei melhor colocar junto porque fica amarrado , da outra forma acho que pode haver falhas por exemplo um usuario ser excluido e por algum motivo os posts permanecerem 

const app = express()
app.use(express.json())
app.use(cors())

type posts= {
        id: number,
        title: string,
        body: string
      }

type userAndPost= {
    id: number,
    name:string,
    email:string,
    phone:string,
    website: string,
    postagens: posts[]
}


app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})

app.get('/feedpage',(request:Request,response:Response)=>{
    //retorna uma resposta ao user com o status 200 e envia oq esta no send ()
    const feed:userAndPost[] =userAndPosts
    response.status(202).send(feed)
})