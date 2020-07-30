module.exports = {
    age: function(timestamp){
        const today = new Date()
        const birthDate = new Date(timestamp) 

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if(month < 0 || month == 0 && today.getDate() < birthDate.getDate()){
            age = age - 1
        }

        return age 
      },

    graduation: function(schooling){
        let graduation = ""
        if(schooling == "complete_high_school"){
            graduation = "Ensino Médio Completo"

        }else if(schooling == "complete_higher_education"){
            graduation = "Ensino Superior Completo"

        }else if(schooling == "masters"){
            graduation = "Mestrado"
            
        }else if(schooling == "doctorate"){
            graduation = "Doutorado" 
        }

        return graduation
    }


}  