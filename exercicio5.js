let consumo = [30,45,20,51,59]
let soma = 0
let media;
let nada;

for(let i=0; i <consumo.length; i++){



soma+= consumo[i]

    if (consumo[i] >=50){
console.log("O consumo esta alto :",consumo[i])
    }
  if (consumo[i] >=58){
    console.log("Alerta critico !",nada)
    console.log("nivel de ernegia elevada:",consumo[i])
   

  }
  media= (soma+consumo[i])/5

}
console.log("media de energia,",media.toFixed(2))


console.log("total gasto foi de :",soma)