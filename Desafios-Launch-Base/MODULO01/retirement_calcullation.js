/*
    Crie um programa para calcular a aposentadoria de uma pessoa.
    Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

*/

const nome = "Daniela";
const sexo = "F";
const idade = 55;
const contribuição = 30;
const regra = idade + contribuição;

if (sexo == "F"){ 

    if (contribuição<30){ 

        console.log(`${nome}, o tempo de contribuição mínimo para mulheres é de 30 anos.`);

    }else{ 

        if(regra >= 85){

            console.log(`${nome}, você pode se aposentar.`); 
        }else{

            console.log(`${nome}, você NÃO pode se aposentar.`);
        }
    }
}else{ 

    if (contribuição<35){ 

        console.log(`${nome}, o tempo de contribuição mínimo para homens é de 35 anos.`);

    }else{ 

        if(regra >= 90){ 

            console.log(`${nome}, você pode se aposentar.`); 
        }else{

            console.log(`${nome}, você NÃO pode se aposentar.`);
        }
    }
}