import express, { Request, Response} from 'express'
import cors from 'cors'
import { people } from "./data"//exercicio 3

const app = express()
app.use(express.json())
app.use(cors())

//exercício 2 -tipo
type task= {
        id: number,
        title: string,
        completed: boolean
      }

type user= {
    id: number,
    name:string,
    Tasklist: task[]
}


app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})

//exo 1-ping e pong 
app.get('/ping',(request:Request,response:Response)=>{
    response.status(202).send('pong')

})


//exo 4-A fazer
app.get('/list/:id/completed',(request:Request,response:Response)=>{
    const idCompleted = Boolean(request.params.id)


    response.status(202).send(idCompleted)

})

//exo5
app.post("/createTask/:id",(request:Request,response:Response)=>{
    const idPerson = Number(request.params.id)

    const {id,title,completed} = request.body

    const findPerson = people.find((user)=>{
        return user.id === idPerson
    })

   findPerson?.Tasklist.push({id,title,completed})
   response.status(201).send(findPerson)
  })

//ex06-  A Fazer

//exo 7
  app.delete("/task/:id", (request: Request, response: Response) => {
    const idPerson = Number(request.params.id)
    const postId = Number(request.query.postId);

    const findPerson = people.find((user)=>{
        return user.id === idPerson
    })//procuro a pessoa
    
    const deletarTask= findPerson?.Tasklist.filter((task) => {
        return task.id !== postId
    })

    response.send(deletarTask);
});

//exo8
app.get('/list/:id',(request:Request,response:Response)=>{
    const id = Number(request.params.id)

    const findPerson = people.find((user)=>{
        return user.id === id
    })
    
    response.status(202).send(findPerson)

})
