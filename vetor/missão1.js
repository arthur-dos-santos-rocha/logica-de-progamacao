//cadastro de nomes
const prompt = require("prompt-sync")();
let nomes = prompt ("Qual o seu nome?")

//usar virgulas
let entrada = nomes.split(',')



for (let i = 0; i < nomes.length < 20; i ++) {

    console.log("Olá,nomes " + entrada[i]);

}
