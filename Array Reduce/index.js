// Mais utilizada para reduzir o Array á um unico elemento

// Some todos os numeros (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador
}, 0)
console.log(soma)

const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares);

// Utilizando 'reduce' para filtrar os numeros pares:
const pares2 = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) {
    acumulador.push(valor)
  }
  return acumulador;
}, []);
console.log(pares2);


const dobro = numeros.map(valor => valor * 2);
console.log(dobro);

//-----------------------------------------------------------------------------

// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Julio', idade: 21 },
  { nome: 'Luiz', idade: 62 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Maria', idade: 37 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Wallace', idade: 47 }
];

const maisVelho = pessoas.reduce((objVelho, objAtual) => {
  if(objVelho.idade < objAtual.idade){
    objVelho = objAtual;
  }
  return objVelho;
});
console.log(maisVelho);

