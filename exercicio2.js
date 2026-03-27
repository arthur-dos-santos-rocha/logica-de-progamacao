let temp = [80, 60, 82, 90]
let soma = 0
let media;

for(let i=0; i <temp.length; i++){
    if (temp[i] >=80){
console.log("o contador passou de 80 foi :",temp[i])
    }
  if (temp[i] >=90){
    console.log("Alerta critico ! temperatura elevada:",temp[i])
  }
  media= (soma+temp[i])/4
}
console.log("media de temperatura,",media.toFixed(2))
