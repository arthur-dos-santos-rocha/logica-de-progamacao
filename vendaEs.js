const prompt = require('prompt-sync')();
let prazos = [];
let quantidades = [];
let setores = [];
let prioridades = [];
let produtos = []
let nome= [];
let option = '';
//listar
let entre1 = 0
let entre2= 0
let entre3 = 0
let entre4 = 0 

while(option !== 5){
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
       if(produtos.length==0){
            console.log("Nenhum produto cadastrado")
            break
            
        
        }
        else if(prazos <= 2){
        entre1

        }else if(prazos <=5){
        entre2;

        }else if(prazos <= 6){
        entre3

        }else
        entre4++
    

    
    
    console.log("Zona vermelha (Urgente)",entre1);
    console.log("Zona laranja (Alta)",entre2);
    console.log("Zona Amarela (Media)",entre3);
    console.log("Zona Verde (Baixa)",entre4);

    }
    
    if(option === "3"){
        // mostrar pedidos, itens,Urgente , setor , maior pedido
        for(i=0; produtos < 0 ; i++)
        console.log(`Maior Pedido: ${produtos[i]} \n Quantidade pedidas ${produtos[i].max}`)
    




    }





















}

