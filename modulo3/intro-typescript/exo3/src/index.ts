function checaAnoBissexto(ano:number):boolean {
    const cond1:boolean = ano % 400 === 0
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }

 if(checaAnoBissexto(2024)){
    console.log("ano bissexto")
 }else{
    console.log("ano não bissexto") 
 }
