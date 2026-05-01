const prompt = require('prompt-sync')();
let tamanho = ''
let sombra = ''
function mediaAltura (alturaPredio, sombraPessoa , sombraPredio){

    return (altpessoa * sombraPredio) / sombraPessoa;

}
let numero = parseFloat(prompt("Digitar o seu tamanho"));
let somb = parseFloat(prompt("Digitar o tamanho da sua sombra"));
let predio = parseFloat(prompt("Digitar a altura da sombra do predio"));

console.log("A altura do predio é ", mediaAltura(alturaPredio))

