// Map altera o valor do array salvando em um novo array (caso queira)
// (Vai ter sempre o mesmo tamanho do vetor original)

// Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let numerosDobro = numeros.map(function (valor) {
  return valor * 2;
});

//Com Arrow Function
numerosDobro = numeros.map(valor => valor * 2);

console.log(numerosDobro);

//-----------------------------------------------------------------------------

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  { nome: 'Julio', idade: 21 },
  { nome: 'Luiz', idade: 62 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Maria', idade: 37 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Wallace', idade: 47 }
];

const nomePessoas = pessoas.map(obj => obj.nome);
console.log(nomePessoas)

/*
let semNomePessoas = pessoas.map(obj => {
  delete obj.nome;
  return obj
})
*/
// Outra maneira de ter apenas a chave "idade" em um novo array:
let semNomePessoas = pessoas.map(obj => ({idade: obj.idade}));
console.log(semNomePessoas)

/*
//const idsPessoas = pessoas.map((obj, index) =>({id: index, nome: obj.nome, idade: obj.idade}));
const idsPessoas = pessoas.map((obj, index) => {obj.id = index; return obj});
*/
// Uma maneira de usar Map sem alterar o array original
// é criar um novo array dentro de Map:
const idsPessoas2 = pessoas.map((obj, index) => {
  const novoObjeto = {...obj};
  novoObjeto.id = index;
  return novoObjeto;
});
console.log(idsPessoas2)


