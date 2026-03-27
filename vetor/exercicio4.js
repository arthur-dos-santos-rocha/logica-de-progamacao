let notas= [6, 8, 10, 2, 5]
let soma = 0
let aprovado;
let reprovado;



let numero =notas.filter(notas => notas >= 10)
console.log("maior nota foi",numero)

for(let i=0; i <notas.length; i++){

    if(notas[i]>7){
        aprovado=notas[i]
        console.log("Alunos aprovado",aprovado)
    }

    if(notas[i]<7){
        reprovado=notas[i]
        console.log("Alunos reprovado",reprovado)
    }
  soma += notas[i];
}

const media = soma / notas.length;

  console.log("media:",media.toFixed(1) )