const pessoa = {
  nome: 'Julio',
  sobrenome: 'Rocha',
  idade: 21,
  endereco: {
    rua: 'Av. Brasil',
    numero: 51
  }
};

// Atribuição normal
const nome = pessoa.nome;
console.log('Atribuição normal: ' + nome)


// Atribuição via desestruturação
const { nome: teste, sobrenome = 'Não Existe', idade, ...restoVar } = pessoa;
console.log('Desestruturação 01: ' + teste, sobrenome, idade)
console.log('Desestruturação 02: ' + restoVar)

const { endereco: { rua: street, numero = 21 } } = pessoa
console.log('Desestruturação 03: ' + street, numero)