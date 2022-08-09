export function alterarFrase (string) {
    const palavras = string.split(" ");

    for (let i = 0; i < palavras.length; i++) {
        palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
    }
    
    return palavras.join(" ");

  }

