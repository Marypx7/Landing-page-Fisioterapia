const cards = document.querySelectorAll('.card')

let current = 1

function updateCarousel(){

    cards.forEach(card => {
        card.classList.remove('left')
        card.classList.remove('active')
        card.classList.remove('right')
    })

    const left =
        (current - 1 + cards.length) % cards.length

    const right =
        (current + 1) % cards.length

    cards[left].classList.add('left')
    cards[current].classList.add('active')
    cards[right].classList.add('right')
}

function nextSlide(){
    current = (current + 1) % cards.length
    updateCarousel()
}

function prevSlide(){
    current = (current - 1 + cards.length) % cards.length
    updateCarousel()
}

/* troca automática */

setInterval(() => {
    nextSlide()
}, 6000)