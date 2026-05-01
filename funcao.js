const prompt = require('prompt-sync')();

function calcularIdade(dataNascimento){

let anoAtual = 2026;
let Idade = anoAtual - dataNascimento
return Idade;

}

function calcularMedia(nota1, nota2){
    let media = (nota1 + nota2)/2;
    return media;


}



let nome = prompt("Digite o nome do aluno ");
let dataNascimento = Number (prompt("Digite a data de nascimento "));
let nota1 = Number (prompt("Digitar primeira nota "));
let nota2 = Number (prompt("Digitar segunda nota "));

let idadeAluno = calcularIdade(dataNascimento);
let mediaAluno = calcularMedia(nota1, nota2);


console.log("Nome: ", nome);
console.log("Idade: ", idadeAluno);
console.log("Média: ", mediaAluno);

