const prompt = require('prompt-sync')()
let saldo = [1000,]
let depositar = []
let extrato = []
let option= ''
let calculo = depositar+saldo

while(option !== "5"){
        console.log("\n =========MENU-DE-ESTOQUE=======");
        console.log("           --Bem Vindo--");
        console.log("1. Mostra saldo");
        console.log("2. depositar");
        console.log("3. sacar");
        console.log("4. ver Extrato")
        console.log("5. sair do extrato")
        option = prompt("opcao: ");

        if(option === "1"){ 
        
            console.log("saldo da conta é de ", saldo)

         }
        else if(option === "2") { 
        
            const deposita =Number(prompt(`Digitar o valor do deposito  `))
            depositar.push(deposita)

            console.log ("seu deposito foi de ",depositar)
            }
        
        
        else if(option === "3"){
            




        }
         





    }

    
