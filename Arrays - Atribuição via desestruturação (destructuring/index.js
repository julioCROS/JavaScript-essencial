let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c)
// ---------------------------

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNum, , terceiroNum, ...restoNums] = numeros;

// restoNums é chamado de ---> ...restOperator, ou, ...spreadOperator  
console.log(primeiroNum, terceiroNum)
console.log(restoNums)

// ---------------------------

const nums2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
const [, [, , terceiroValor],] = nums2;

console.log(nums2)
console.log(terceiroValor)

