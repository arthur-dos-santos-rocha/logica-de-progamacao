const prompt = require('prompt-sync')();

let prazos = [];
let quantidades = [];
let setores = [];
let prioridades = [];
let produtos = []
let nome= [];
let pedido = []
let pedidos=[]
let option = '';
let prioridade = "";


while(option !== "5"){
        console.log("\n =========MENU-DE-ESTOQUE=======");
        console.log("           --Bem Vindo--");
        console.log("1. cadastrar pedido");
        console.log("2. listar itens");
        console.log("3. Resumo gerencial");
        console.log("4. Buscar Pedido")
        console.log("5. sair do menu")
        option = prompt("opcao: ");

     if(option === "1"){
        
    const produto = String(prompt(`Digite o produto:`));
    const setor = String(prompt(`Digitar o setor: `))
    const quantidade = Number(prompt(`Digitar a quantidade: `))
    const prazo = Number(prompt(`Digitar o prazo: `))
    
    produtos.push(produto)
    setores.push(setor)
    quantidades.push(quantidade)
    prazos.push(prazo)

    }
   if (option === "2") {

    if (produtos.length == 0) {
        console.log("Nenhum produto cadastrado");
    } else {

        for (let i = 0; i < produtos.length; i++) {

        //let prioridade = "";


            if (prazos[i] <= 2) {
                prioridade = "Urgente";
            } else if (prazos[i] <= 5) {
                prioridade = "Alta";
            } else if (prazos[i] <= 10) {
                prioridade = "Media";
            } else {
                prioridade = "Baixa";
            }

            console.log(`Produto: ${produtos[i]}`);
            console.log(`Prazo: ${prazos[i]} dias`);
            console.log(`Prioridade: ${prioridade}`);
            console.log("======================")
        }
    }
    }
    
    if(option === "3"){
        // mostrar pedidos, itens,Urgente , setor , maior pedido
        let tlpedido = produtos.length
        let itens = 0 
        let urgente = 0
        let pedido = produtos[0];
        let maiorPedido = quantidades[0];
        let setor = setores[0];


       for (let i = 0; i < produtos.length; i++) {
        itens += quantidades[i];

         if (prazos[i] <= 2) {
                urgente++;
         }
         if (quantidades[i] > maiorPedido) {
         maiorPedido = quantidades[i];
         pedido = produtos[i];
        setor = setores[i];
            }
        }
    
    console.log(`${produtos} -- ${prioridade} || itens: ${itens}-- Urgente: ${urgente} -- pedido: ${pedido} -- quantidade: ${maiorPedido} -- maior pedido: ${setor}`)
    }
if(option === "4"){

 if(produtos.length === 0){
 console.log("Nenhum pedido cadastrado");
 }else {

   const busquePedido = prompt("nome do produto ");
   let encontrado = false;

     for(let i = 0; i < produtos.length; i++){

     if(produtos[i] === busquePedido){

        console.log("\nPedido encontrado:");
       console.log("Produto:", produtos[i]);
       console.log("Setor:", setores[i]);
       console.log("Quantidade:", quantidades[i]);
      console.log("Prazo:", prazos[i]);

     encontrado = true;
     }

    }

  if(!encontrado){
    console.log("iten não encontrado");
     }
    }
}
    

if(option === "5"){

    console.log("=========Relatorio final==========")
    
     for(let i = 0; i < produtos.length; i++){
       //let soma
       //soma+= quantidades[i]
     console.log(`Produto: ${produtos[i]} - Quantidade: ${quantidades[i]} - Prazo: ${prazos[i]}`)
    }
    console.log("Saindo do sistema...");
    
    }
}