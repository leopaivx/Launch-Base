// Crie um programa que armazena um array de usuários (objetos), 
// cada usuário tem um nome e suas tecnologias (novo array).
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela 
// as informações dos usuários.

const usuarios = [
    {
        nome: 'Carlos',
        tecnologias:['HTML','CSS']
    },
    {
        nome: 'Jasmine',
        tecnologias:['JavaScript','CSS']
    },
    {
        nome: 'Tauane',
        tecnologias: ['HTML','Node.js']
    }
]

for(let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)

}