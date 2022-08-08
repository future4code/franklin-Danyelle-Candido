import express from "express"
import cors from "cors"

const app = express()

app.use(express.json()) // fala que vamos nos comunicar usando arquivos json
app.use(cors()) // fala que vamos habilitar o cors


app.get('/amora', (req, res) => {
  console.log("BATEU")

  res.send("amora").status(201) // resposta de requisição
})

app.post("/bananinha/:idade", (req, res) => {
  const name = req.body.name

  if (!name) {
    res.status(500).end()
  }
  
  console.log("req.body", req.body)
  console.log("req.headers", req.headers);
  console.log("header-legal", req.headers['header-legal']);
  console.log("idade", req.params.idade)

  console.log("BATEU");

  res.status(200).send("O resultado dessa requisição é isso que você vê agora"); // resposta de requisição
});

app.listen(3003, () => {
  console.log("Salve família! Servidor de pé na porta 3003");
});