//1-
const soma=Number(process.argv[3])+Number(process.argv[4])
const sub=Number(process.argv[3])-Number(process.argv[4])
const div=Number(process.argv[3])/Number(process.argv[4])
const mult=Number(process.argv[3])*Number(process.argv[4])

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
