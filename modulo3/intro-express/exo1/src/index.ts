import express, { Request, Response} from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.get('/exo1',(request:Request,response:Response)=>{
    const retorno='Hello sou o exo1'
    response.status(202).send({message:retorno})
})

app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})