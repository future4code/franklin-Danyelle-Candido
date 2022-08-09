function reverseString(str:string):string {
    // separo a string em um array["H","e","l","l","o"]
    let separarString:string[] = str.split(""); // var separarSring = "hello".split("");

    // reverto este array ["o", "l", "l", "e", "h"]
    let reverterArray:string[] = separarString.reverse(); 
 
    // juntar o array transformando em string "olleh"
    let juntarArray:string = reverterArray.join("");
    return juntarArray;
}
 
console.log(reverseString("hello"))