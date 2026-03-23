function escolherTansporte(distanciaKm,orcamento ){
 
    if (distanciaKm <= 2){
        return"A pé";
    }
    else if (distanciaKm <= 8 && orcamento >= 10){
        return"Onibus";
    }
    else if (distanciaKm<=15 && orcamento>=25){
        return"moto/carro por app";

    }
    else{
        return "não e possivel com esse orcamento";
    }
}
console.log(escolherTansporte(1 , 5));

console.log(escolherTansporte(5, 15));

console.log(escolherTansporte(1,30));

console.log(escolherTansporte(0,1));
