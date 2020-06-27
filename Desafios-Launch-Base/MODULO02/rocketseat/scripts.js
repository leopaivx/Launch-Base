const modalOverlay = document.querySelector('.modalOverlay')

const cards = document.querySelectorAll('.card')

const modal = document.querySelector('.modal')

for(let card of cards){
    const rocketId = card.getAttribute('id')
    card.addEventListener('click', function(){
        modalOverlay.classList.add('active')
        modal.querySelector('iframe').src = `https://rocketseat.com.br/${rocketId}`
    })
}




document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximized')
    modalOverlay.querySelector('iframe').src = ""
})

document.querySelector('.maximize-modal').addEventListener('click', function(){
    if(modal.classList.contains('maximized')){
        modal.classList.remove('maximized')
    }else{
        modal.classList.add('maximized')
    }
})
