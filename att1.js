const prompt = require('prompt-sync')();

function verValor (valor){
if(valor>= 0){
return true
}
else{
    return false
}
}

let numero = parseInt(prompt("Digitar um numero inteiro"));
if (verValor(numero)){

    console.log("O valor é positivo.")
}
else{
    console.log("O valor é negativo.")
}



