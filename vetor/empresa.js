let vendas = [10, 200, 160, 1000, 3, 50, 68]
let soma=0
let dia = 7
let maior = Math.max(...vendas)
let dias;

for(let i=0; i <maior.length; i++){
    
    

}
console.log("Maior venda foi de ",maior)

for(let i=0; i <vendas.length; i++){
    
  if(vendas[i]>100){
        console.log("dias que passar de 100:",vendas[i])
    }else {
        console.log("não passaram de 100:",vendas[i])
    }




soma +=vendas[i]
 dias =(soma + vendas[i]) / dia
}
console.log("total:",soma);
console.log("media diaria:",dias.toFixed(2));


   



   