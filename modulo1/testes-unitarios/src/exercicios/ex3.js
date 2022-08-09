export function checaItensDuplicados(array) {

  function transformaParaMaiusculo(x)
  {
      for (let i = 0, j = x.length; i < j; i++) {
           x[i] = x[i].toString().toUpperCase();
      }
  
      return x;
  }
  
  const tranf = transformaParaMaiusculo(array)
  const numerosDuplicados = tranf.filter((item, index) => tranf.indexOf(item) !== index) 
  return numerosDuplicados.length ? true : false
}
