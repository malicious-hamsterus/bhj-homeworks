let holes = [...document.querySelectorAll(".hole")]
let deadCounter = document.querySelector("#dead")
let lostCounter = document.querySelector("#lost")

holes.map(item => {
    item.addEventListener('click', function(e) {
        let currentHole = e.target

        if( currentHole.classList.contains('hole_has-mole')) {
            deadCounter.textContent ++
        } else {
            lostCounter.textContent ++
        }

        if(lostCounter.textContent >= 5) {
            deadCounter.textContent = 0
            lostCounter.textContent = 0
            return alert('Вы проиграли')
        }
        if(deadCounter.textContent >= 10) {
            deadCounter.textContent = 0
            lostCounter.textContent = 0
            return alert('Вы выиграли')
        }
    })
})

function getHole( index ) {
    return document.querySelector(`#hole${index}`)
}