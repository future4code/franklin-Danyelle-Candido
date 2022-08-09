
if (process.argv[2]!==undefined&&process.argv[3]!==undefined){
console.log("Olá, "+process.argv[2]+" ! Você tem "+process.argv[3]+" anos.")

const idadeEm7Anos=Number(process.argv[3])+7
console.log("%cOlá, "+process.argv[2]+" %c! Você tem "+process.argv[3]+"'%c anos.Em sete anos você terá "+idadeEm7Anos,'color:hsl(120, 100%, 60%);background-color:hsl(120, 100%, 25%);')
}
else if(process.argv[2]===undefined&&process.argv[3]===undefined){
    console.log('%c Esperava 2 parâmetros!Não recebi nenhum %s','color:hsl(0, 100%, 90%);background-color:hsl(0, 100%, 50%);')
}
else if(process.argv[2]===undefined||process.argv[3]===undefined){
    console.log("%c Esperava 2 parâmetros!Recebi apenas 1",'color:hsl(0, 100%, 90%);background-color:hsl(0, 100%, 50%);')
}