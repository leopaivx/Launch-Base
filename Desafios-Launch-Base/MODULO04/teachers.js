const fs = require('fs')
const data = require('./data.json')
const {age, graduation} = require('./utils')


//create
exports.post = function(req,res){
    const keys = Object.keys(req.body)

    for(let key of keys){
        if(req.body[key] == ""){
            return res.send ("Please fill all fields")
        }
    }
    // return res.send(req.body)
    let {avatar_url, name, birth, schooling, course, services } = req.body

    birth = Date.parse(req.body.birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        schooling,
        course,
        services,
        created_at,
    })
        
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err){
            return res.send("Error")
        }
        return res.redirect("/teachers")
    })
    
}

//show
exports.show = function(req,res){
    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher){
        return res.send("Teacher not found")
    }

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        services: foundTeacher.services.split(","),
        created_at: Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),
        graduation: graduation(foundTeacher.schooling)
    }

    return res.render('teachers/show',{teacher})
}