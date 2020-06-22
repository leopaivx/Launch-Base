// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = "Abílio"
const peso = 82
const altura = 1.78

const imc = peso / (altura * altura) 

if (imc >= 30){
    console.log(`${nome} você está acima do peso`)
}else{
    console.log(`${nome} você não está acima do peso`)
}


