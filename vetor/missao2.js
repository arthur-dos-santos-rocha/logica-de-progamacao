const prompt = require("prompt-sync")();
let numeros = prompt ("Digite 5 números separados por vírgula: ")
let entrada = numeros.split(",")
let soma= 0;

for (let i = 0; i < entrada.length; i ++) {
soma += Number(entrada[i]);
 
}
 console.log("seus numeros sao" ,soma);