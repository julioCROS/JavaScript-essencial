// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou menos que o array original
/*
// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callBackFilter(valorElemento) {
  return (valorElemento > 10);
}

const numerosFiltrados = numeros.filter(callBackFilter);
console.log(numerosFiltrados)



const numerosFiltrados2 = numeros.filter(function (valorElemento) {
  return (valorElemento > 10);
});
console.log(numerosFiltrados2)



const numerosFiltrados3 = numeros.filter(valorElemento => valorElemento > 10);
console.log(numerosFiltrados3)



const numerosFiltrados4 = numeros.filter((valorElemento, indice, array) => {
  console.log(valorElemento, indice, array)
  return (valorElemento > 10);
});
console.log(numerosFiltrados4)
*/
//-----------------------------------------------------------------------------

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'a'

const pessoas = [
  {nome: 'Julio' , idade: 21},
  {nome: 'Luiz' , idade: 62},
  {nome: 'Rosana' , idade: 32},
  {nome: 'Maria' , idade: 37},
  {nome: 'Eduardo' , idade: 55},
  {nome: 'Wallace' , idade: 47}
];

const pessoasMaisDe5Letras = pessoas.filter(objeto => objeto.nome.length >= 5);
console.log(pessoasMaisDe5Letras)

const pessoas50Anos = pessoas.filter(objeto => objeto.idade > 50);
console.log(pessoas50Anos)

const pessoasLetraA = pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('a'))
console.log(pessoasLetraA)

