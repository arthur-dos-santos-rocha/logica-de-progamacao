const prompt = require('prompt-sync')();

let prazos = [];
let quantidades = [];
let setores = [];
let prioridades = [];
let produtos = []
let nome= [];
let option = '';


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
    if (option === "2"){
        
    
//listar
let entre1 = 0
let entre2= 0
let entre3 = 0
let entre4 = 0 



       if(produtos.length==0){
            console.log("Nenhum produto cadastrado")
            //usar o break
            
        
        }
        if(prazos <= 2){
        entre1++;

        }else if(prazos <= 5){
        entre2++;

        }else if(prazos <= 10){
        entre3++;

        }else{
        entre4++;
        }

    
    
    console.log("Zona vermelha (Urgente)",entre1);
    console.log("Zona laranja (Alta)",entre2);
    console.log("Zona Amarela (Media)",entre3);
    console.log("Zona Verde (Baixa)",entre4);

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
    console.log("Total de pedidos:", tlpedido);
    console.log("Quantidade total de itens:", itens);
    console.log("Pedidos urgentes:", urgente);
    console.log("Maior pedido:","Produto: ", pedido ,"quantidade: ",maiorPedido)
    console.log("Setor do maior pedido:", setor); 
    }
if(option === "4"){

if(produtos.length === 0){
 console.log("Nenhum pedido cadastrado");
 }else{

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
    console.log("Saindo do sistema...");
}


        
}
            

    








}

