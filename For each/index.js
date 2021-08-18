// Disponivel apenas para arrays
const a1 = [11, 22, 33, 44, 55, 66, 77, 88, 99];

/*
for (let valor of a1) {
  console.log(valor);
}
*/

let total = 0;
a1.forEach(valor => {
  total += valor;
});

console.log(total);
