const listaTarefas=["Lavar Louça","Comprar Leite",process.argv[2]]


if(process.argv[2]!==undefined){
    console.log("%c tarefa adicionada com sucesso!%s",'color:hsl(120, 100%, 60%);background-color:hsl(120, 100%, 25%);')
    console.table(listaTarefas)
}else{
    console.log("%c você esqueceu de enviar o item a ser acrescentado na lista", 'color:hsl(0, 100%, 90%);background-color:hsl(0, 100%, 50%);')
}