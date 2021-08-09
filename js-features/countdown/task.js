const timerText = document.querySelector('#timer')
let timer = timerText.textContent
console.log(timer)
let intervalId = setInterval(() => {
    if(timer === 0) {
        clearInterval(intervalId)
        window.location = 'https://imagename.ru/imgbig/14701.jpg'
    } else {
        timer -= 1;
        timerText.textContent = getHours(timer)
    }
}, 1000);

function getHours(seconds) {
    let hours, mins, sec

    hours = zeroAdder(Math.round(seconds / 3600))
    mins = zeroAdder(Math.round(seconds % 3600 / 60))
    sec = zeroAdder(seconds % 60 % 60)
    return `${hours}:${mins}:${sec}`
}

function zeroAdder(num) {
    return num >= 10 ? num : `0${num}`
}