// Declaração de funções (Function Hoisting)
// Hoisting: Usar função/variavel antes ou depois de sua declaração
// pois o JavaScript "move" toda function/variavel para o topo do código

falarOi();
function falarOi() {
  console.log('Oi');
};
falarOi();

//-----------------------------------------------------------------------------

// Funções são first-class objects (Objetos de primeira classe)
// Tratar funções como dados (Function expression)
const souUmDado = function () {
  console.log('Sou um dado');
};
souUmDado();

function executaFuncao(funcao) {
  console.log('Vou executar sua função abaixo: ')
  funcao();
}
executaFuncao(souUmDado)

//-----------------------------------------------------------------------------

// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma Arrow function');
};
funcaoArrow();

//-----------------------------------------------------------------------------

// Dentro de um obeto
const obj = {
  falar: function(){
    console.log('Estou falando...')
  },
  falar2() {
    console.log('Outra forma de falar..')
  }
};

obj.falar();
obj.falar2();




