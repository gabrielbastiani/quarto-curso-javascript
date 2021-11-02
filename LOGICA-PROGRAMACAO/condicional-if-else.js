let idade = 17;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

if (!comprouBilhete) {
    console.log("Não. Não comprou o bilhete.")
} else {
    if (idade >= 18) {
        console.log("É maior de idade pode viajar.")
    } else {
        console.log("Opa!!! É menor de idade não pode viajar.")
    }
    console.log("Comprou o bilhete.")
}

let n1 = 0;
let n2 = 1;
let media = n1 + n2 / 2;
console.log(`Média: ${media}`);
console.log((3 * 2) ** 2);

if(n1 === 0 || n2 === 0){
    console.log("Reprovado.")
} else if (media < 7){
    console.log("Reprovado. Mas há recuperação.")
} else {
    console.log("Aprovado.")
}

console.log("Saiu do bloco IF.")