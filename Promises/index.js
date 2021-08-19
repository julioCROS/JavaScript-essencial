function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof (msg) != 'string') {
      reject('BAD VALUE');
    }

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi(21, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibe dados na tela');
  })
  .catch(error => {
    console.log('ERRO:', error);
  });

// Promise executam em paralelo
console.log('Isso sera exibido antes de qualquer promise')


/*

esperaAi('Frase 1', rand(1, 3), function () {
  esperaAi('Frase 2', rand(1, 3), function () {
    esperaAi('Frase 3', rand(1, 3));
  });
});

*/

