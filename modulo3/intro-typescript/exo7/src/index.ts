function conversorDNA(dna:string):string {
    // separo a string em um array["H","e","l","l","o"]
    let converter:string =  dna.replace(/A/g, "U").replace(/T/g, "A").replace(/G/g, "C").replace(/C/g, "G") 

    

    return converter;
}
 
console.log(conversorDNA("ATTGCTGCGCATTAACGACGCGTA"))