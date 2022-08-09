import express, { json } from 'express'
//importando express e o json como era no react


const app = express()
//usando uma variavel para receber essa function com era no useNavigate
app.use(json())
//usando o formato json importado
app.get('/', (request, response) => {
  return response.json({ message: 'Hello, TypeScript!' })
})
//usando o .get(requisição) que recebe como parametro o caminho , request e response e neste caso retornará uma response que é o json com a menssagem hello typeScript 

app.listen(4000, () => {
  console.log('🚀 Server started on http://localhost:4000')
})
//aqui o app vai escutar a porta 3000 e imprimir no console o servidor que foi iniciado na porta 3000, se eu mudar para 4000 ele iniciará na 4000 as requisições