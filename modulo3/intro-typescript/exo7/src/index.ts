function conversorDNA(dna:string):string[] {
    // separo a string em um array["H","e","l","l","o"]
    let converter:string =  dna.replace(/A/g, "U").replace(/T/g, "A").replace(/G/g, "C");

    let arrayDna:string[] = dna.split(""); 
    let arrayconverter:string[] = converter.split(""); 

    for (let i = 0; i < arrayconverter.length; i++) {
        if(arrayconverter[i]===arrayDna[i]){
            arrayconverter[i] = arrayconverter[i].replace(/C/g, "G")
        }
        
    }
    console.log(arrayDna)

    return arrayconverter;
}
 
console.log(conversorDNA("ATTGCTGCGCATTAACGACGCGTA"))