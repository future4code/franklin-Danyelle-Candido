//1- para acessarmos props na linha de comando usamos o process.argv[0] e dentro das [] passamos a posição do parametro

//2-
console.log("Olá, "+process.argv[2]+" ! Você tem "+process.argv[3]+" anos.")

//3-
const idadeEm7Anos=Number(process.argv[3])+7
console.log("Olá, "+process.argv[2]+" ! Você tem "+process.argv[3]+" anos.Em sete anos você terá "+idadeEm7Anos)