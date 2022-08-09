export function checaPalindromo(frase) {
  return (
    frase
      .toLowerCase()
      .replace(/[- ]/g, "")
       ===
    frase
      .toLowerCase()
      .replace(/[- ]/g, "")
      .split("")
      .reverse()
      .join("")
      
  );
}
