//cadastro de nomes
const prompt = require("prompt-sync")();
let nomes = prompt ("Qual o seu nome?")
let input = prompt ("qual o seu numero?")
//usar virgulas
let entrada = nomes.split(',')
let numeros = input.split(",")
let soma = 0


for (let i = 0; i < nomes.length < 20; i ++) {
soma+=numeros[i]

    console.log("Olá,nomes " + entrada[i]);

}
 console.log("seus numeros é",soma)