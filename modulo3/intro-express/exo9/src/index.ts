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

type user= {
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
    const feed:user[] =userAndPosts
    response.status(202).send(feed)

})

app.get('/feedpage/:id',(request:Request,response:Response)=>{
    const idPerson = Number(request.params.id)

    const findPerson = userAndPosts.filter((user)=>{
        return user.id === idPerson
    })

    response.status(202).send(findPerson)

})

app.post("/createPost/:id",(request:Request,response:Response)=>{
    const idPerson = Number(request.params.id)

    const {id,title,body} = request.body

    const findPerson = userAndPosts.find((user)=>{
        return user.id === idPerson
    })//procuro a pessoa

   findPerson?.postagens.push({id,title,body})
   response.status(201).send(findPerson)

  })

app.post("/createPost/:id",(request:Request,response:Response)=>{
    const idPerson = Number(request.params.id)

    const {id,title,body} = request.body

    const findPerson = userAndPosts.find((user)=>{
        return user.id === idPerson
    })//procuro a pessoa

   findPerson?.postagens.push({id,title,body})
   response.status(201).send(findPerson)

  })

app.delete("/deletar", (request:Request,response:Response) => {
    const idPost =Number(request.query.id)
  
    userAndPosts.forEach((user:any) => {
      user.postagens = user.postagens.map((postagem:any) => {
        if (postagem.id === idPost) {
          return {}
        }
        return postagem
      });
    })
  
    response.status(200).send(userAndPosts)
  })