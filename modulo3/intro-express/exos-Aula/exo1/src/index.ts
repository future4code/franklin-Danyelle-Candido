import express, { Request, Response} from 'express'
import cors from 'cors'

const app = express()
// com as linhas acima (de express)já consigo  criar minha api , ai é só passar app.get e etc

app.use(express.json())//aqui estou falando para minha api usar json quando for enviar alguma info(dados) para o front 
app.use(cors())//aqui estou falando para que o app use a lib de cors quando criarmos nossa api, isso evita que tenhamos erro de cors

//endpoints-verbos que chamamos na nossa api(get, post,put e delete)
//pegar ('aqui é colocado o caminho após a url principal',(requisição e resposta)-> e como estamos usando TS importamos o tipo da lib express request e response
app.get('/nome',(request:Request,response:Response)=>{
    //retorna uma resposta ao user com o status 200 e envia oq esta no send ()
    const retorno='primeiro endpoint criado'
    response.status(202).send({message:retorno})
})

app.post('/token',(request:Request,response:Response)=>{
/*     o req header serve para quando queremos solicitar ao nosso user algo no headers como por exemplo a authorization */
    const token = request.headers.authorization
    console.log(token)

    response.status(200).send({message:"TOKEN ENVIADO"})
})

app.post('/enviar-nome',(request:Request,response:Response)=>{
    /* o req body é para quando precisamos passar algo com mais de uma linha , por exemplo um objeto um json, um yaml */
        const cadastrar = request.body
        console.log(cadastrar)
    
        //aqui eu retorno uma resposta
        response.status(201).send({message:"cadastrado"})
})

app.post('/encontrar-prod',(request:Request,response:Response)=>{
/* o req query é quando preciso fazer filtros ou páginação*/
const array=['teclado', 'mouse', 'monitor']
        const {produto} = request.query

        const [achar]=array.filter((prod)=>{
            return prod === produto
        })

        if(!achar){
            //throw new Error('não achei o produto')- se não achar posso usar isso que da um erro bem feio ou uma response conforme abaixo
            response.status(404).send({message:'produto not found'})
        }
        console.log(produto)

        response.status(201).send(`produto ${achar} encontrado`)
        })

app.post('/nome/:id',(request:Request,response:Response)=>{
    /* o req params é para  passar parametros como por exemplo o id */
    const id = Number(request.params.id)
    const arrayId = [{id:1,nome:'Gabriel'},{id:2,nome:'Murilo'}]

    const achar= arrayId.find((person)=>{
        return person.id === id
    })
    
        //aqui eu retorno uma resposta
        response.status(200).send({message:`Bem vindx!${achar?.nome}`})
/*         response.status(201).end() -usamos quando não queremos retornar nada ao user */
})    


app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})//aqui  eu falo que meu app esta escutando (rodando) na porta 3003 e faço uma arrow function callback mostrando onde ele esta rodando

console.log("Hello, world!")