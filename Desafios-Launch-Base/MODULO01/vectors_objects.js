//Crie um programa com um objeto para armazenar dados de 
//um programador como nome, idade e tecnologias que trabalha.

const programador = {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
        {
            nome: "C++",
            especialidades: "Desktop"
        },
        {
            nome: "Python",
            especialidades: "Data Science"        
        },
        {
            nome: "JavaScript",
            especialidades: "Web/Mobile"
        }
    ]
}

console.log
(`O programador ${programador.nome} tem ${programador.idade} anos e usa as tecnologias ${programador.tecnologias[0].nome}, ${programador.tecnologias[1].nome} e ${programador.tecnologias[2].nome} 
com especialidade em ${programador.tecnologias[0].especialidades}, ${programador.tecnologias[1].especialidades} e ${programador.tecnologias[2].especialidades}.`)