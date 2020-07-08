const express = require('express')
const nunjucks = require('nunjucks')
const courses = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views',{
    express: server,
    autoescape: false,
    noCache: true
})



server.get("/", function(req, res){
    const data = {
        title: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        description: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        button: "Quero embarcar nesse foguete",
        rocket_url: "assets/undraw_Outer_space_drqu.svg",

        trophy_url: "assets/undraw_winners_ao2o.svg",
        tecnologies_title: "As mesmas tecnologias utilizadas por empresas como:",
        companies: "Nubank, Netflix, Uber, Instagram e Airbnb",
        tecnologies_description: "Imagine você dominando as mesmas tecnologias adotadas pelos melhores times do mundo, construindo aplicações de alta performance e se destacando entre os maiores programadores."

    }



    return res.render('about', {about: data})
})

server.get("/courses", function(req, res){
   
    return res.render('courses', {courses})
})

server.get("/courses/:id", function(req, res){
    const id = req.params.id;
    const data = {
        trophy_url: "/assets/undraw_winners_ao2o.svg",
        launchbase_url: "/assets/undraw_To_the_stars_qhyy.svg",
        gostack_url: "/assets/undraw_react_y7wq.svg",
        tecnologies_title: "As mesmas tecnologias utilizadas por empresas como:",
        companies: "Nubank, Netflix, Uber, Instagram e Airbnb",
        tecnologies_description: "Imagine você dominando as mesmas tecnologias adotadas pelos melhores times do mundo, construindo aplicações de alta performance e se destacando entre os maiores programadores."
    }
    return res.render(id, {about: data})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  })

server.listen(7770, function(){
    console.log('server is runnning')
})