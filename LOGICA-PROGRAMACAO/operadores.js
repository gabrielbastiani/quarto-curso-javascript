// + - * / % **
let n1 = 10
let n2 = 5

//OPERADORES ARITIMETICOS
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)
console.log(2 ** 3)

// OPERADORES DE ATRIBUIÇÃO
let n3 = 20
// n3 = n3 + 15;
n3 -= 15;
console.log(n3)

// INCREMENTO E DECREMENTO
let i = 0;
console.log(i++);
console.log(i);

// COMPARAÇÃO
/*
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/

console.log(n1, n2, n3);
console.log(n1 < 10);
console.log(n1 >= 10);

console.log(n1 != 10);
console.log(n1 !== "10");

// OPERADORES LÓGICOS
/*
Para uma pessoa viajar para o exterior:
 - Precisa ser maior de 18 anos
 OU
 - Acompanhado com os pais
 E
 - Ter comprado bilhete
*/
let idade = 18
let paisPresentes = true;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

console.log(n1, n2, n3);
n1 = 6;
n2 = 8;
let media = n1 + n2 /2;
console.log(`Média: ${media}`);
console.log((3 * 2) ** 2)