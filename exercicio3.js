let estoque = [0, 8, 6, 10, 20,2, 3]
let soma=0
let repor;

for(let i=0; i <estoque.length; i++){
if(estoque[i]<5){
    console.log("precisa repor:",estoque[i])
   
    console.log("total de reposição:",estoque[i] );
    }
    if (estoque[i]>5){
        
        console.log("estoque estavel",estoque[i])
    }
}