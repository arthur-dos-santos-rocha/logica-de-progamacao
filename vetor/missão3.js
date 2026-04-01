const prompt = require("prompt-sync")();


let totalnotas = 3
const registros=[]


for (let i = 0; i < totalnotas; i++) {
    let nome = prompt(`Digite seu nome ${i + 1}:`);
let nota = prompt( `Digite sua nota ${i + 1}: `);


if (nota > 7) {

console.log(nome + " Aprovado ",nota);

} 
else {
    console.log(nome + " Reprovado ", nota); }
    registros.push({nome: nome, nota: nota})
}

