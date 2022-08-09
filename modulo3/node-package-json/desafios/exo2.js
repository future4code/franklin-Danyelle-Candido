//1-
const soma=Number(process.argv[3])+Number(process.argv[4])
const sub=Number(process.argv[3])-Number(process.argv[4])
const div=Number(process.argv[3])/Number(process.argv[4])
const mult=Number(process.argv[3])*Number(process.argv[4])

if (process.argv[2]===undefined&&process.argv[3]===undefined&&process.argv[4]===undefined){
	console.log("Esperava receber 3 parametrôs, não recebi nenhum.")
	}
	else if(process.argv[2]===undefined||process.argv[3]===undefined||process.argv[4]===undefined){
		console.log("Você esqueceu de enviar algum parametro, esperava receber 3 parametros")
	}
	else {
		switch(process.argv[2]){
			case "soma":
				console.log(process.argv[3]+ " + " +process.argv[4]+ " = "+ soma)
				break;
			case "sub":
				console.log(process.argv[3]+ " - " +process.argv[4]+ " = "+ sub)
				break;
			case "div":
				console.log(process.argv[3]+ " / " +process.argv[4]+ " = "+ div)
				break;
			case "mult":
				console.log(process.argv[3]+ " X " +process.argv[4]+ " = "+ mult)
				break;
		}
		
	}




