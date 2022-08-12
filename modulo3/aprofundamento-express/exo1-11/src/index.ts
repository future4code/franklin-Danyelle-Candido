import express, { Request, Response} from 'express'
import cors from 'cors'
import { people } from "./data"//exercicio 3

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003 view documentation https://documenter.getpostman.com/view/20034664/VUjSEiXH" )
})

//exo 1-ping e pong 
app.get('/ping',(request:Request,response:Response)=>{
    response.status(202).send('pong')

})


//exo 4
app.get('/completed',(request:Request,response:Response)=>{
    
    const tasks= people.map((user) => {
        return user.Tasklist
    }).flat(1);//pegas as tarefas

    const completed = tasks.filter((completed) => {
        return completed.completed
    }).flat(1);//pegar as tarefas completas

    response.status(202).send(completed)

})
//exo4
app.get('/inprogress',(request:Request,response:Response)=>{
    
    const tasks= people.map((user) => {
        return user.Tasklist
    }).flat(1);//pegas as tarefas

    const inprogress = tasks.filter((inprogress) => {
        return inprogress.completed ===false
    }).flat(1);//pegar as tarefas completas

    response.status(202).send(inprogress)

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
app.put('/task/:id',(request: Request, response: Response) =>{
    const idPerson = Number(request.params.id)
    const statusId = Number(request.query.statusId);

    const findPerson = people.find((user)=>{
        return user.id === idPerson
    })//procuro a pessoa

    const atualizarTask= findPerson?.Tasklist.filter((task) => {
        return task.id === statusId
    }).map((task) => {
        return task = {
            id:task.id,
            title: task.title,
            completed: !task.completed
        }
    })

    response.status(201).send(atualizarTask)

})


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

    const Others = people.find((user)=>{
        return user.id !==id 
    })
    
    //exo 10
    response.status(202).send({
        todos: {
            selectedUser: [
                findPerson
            ],
            others: [
               Others
            ]
        }
    })

})

//documentação - https://documenter.getpostman.com/view/20034664/VUjSEiXH
