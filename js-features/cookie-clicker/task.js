const cookie = document.querySelector('#cookie')
let counter = document.querySelector('#clicker__counter')
let speed = document.querySelector('#clicker__timer')
let dateLastClick = Date.now()

cookie.addEventListener('click', function(event) {
    counter.textContent ++
    cookie.style.width = counter.textContent % 2 ? '220px' : '200px'
    
    time = Date.now()
    speed.textContent = Math.round(1000 / (time - dateLastClick) * 100) / 100
    dateLastClick = time
})
