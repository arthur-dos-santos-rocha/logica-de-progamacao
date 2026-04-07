const prompt = require('prompt-sync')();
let opcao = '';
let nome=[]
let numero= []




while (opcao !== 3){
console.log("\n =========MENU=======");
console.log("1. cadastrar aluno");
console.log("2. listar alunos");
console.log("3. sair");
opcao = prompt("opcao:");



if (opcao === "1") {
     const nomes = String(prompt(`Digite seu nome :`));
    const numeros = Number(prompt('digitar sua nota:'));
    
    nome.push(nomes);
    numero.push(numeros)
     
 }

else if (opcao === "2"){
    console.log("----lista dos alunos----")

    for(let i=0; i <nome.length; i++){

console.log(`${nome[i]} || nota ${numero[i]} || aluno: ${numero[i]>=7 ? "aprovado" : "reprovado"}`)

}
}
else if (opcao === "3"){
    console.log("vc saiu do menu.");
    break;
}

else{
    console.log("   0   0")
    console.log("--______--")

    console.log(" ======================")

console.log(`
 [:::::::]
 | 0   0 |
 |   ^   |
 | \\___/ |
 [_______]
`);
console.log("Não tem essa opção :(")
}
}
