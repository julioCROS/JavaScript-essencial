// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filtroPar = numeros.filter(valor => valor % 2 === 0);
console.log(filtroPar);

const mapDobrar = filtroPar.map(valor => valor * 2);
console.log(mapDobrar);

const reduceSoma = mapDobrar.reduce((soma, valor) => {
  soma += valor;
  return soma;
})
console.log(reduceSoma)

//Fazendo de maneira simplificada:
const resultado = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((soma, valor) => soma += valor);
console.log(resultado);



