const fs = require('fs');

const listaTarefas=["Lavar Louça","Comprar Leite",process.argv[2]]

fs.writeFile("books.txt", listaTarefas, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("tarefa adicionada com sucesso!\n");
      console.log("A lista contém:");
      console.log(fs.readFileSync("books.txt", "utf8"));
    }
  });