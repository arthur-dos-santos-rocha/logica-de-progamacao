const prompt = require("prompt-sync")();
let opcao = '';

while (opcao !== "3"){
console.log("\n =========MENU=======");
console.log("1. cadastrar aluno");
console.log("2. listar alunos");
console.log("3. sair");
opcao = prompt("opçâo:");

}

for (let i = 0; i < 3; i++) {
    let nome = prompt(`Digite seu nome ${i + 1}:`);

}
