const dropValue = document.querySelector('.dropdown__value')
const dropItems = [...document.querySelectorAll('.dropdown__item')]
const dropDown = document.querySelector('.dropdown')

dropItems.map(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        dropValue.textContent = e.target.textContent
        document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')
    })
})

dropDown.addEventListener('click', function(e) {
    e.stopPropagation()
    if(e.target.nextElementSibling) {
        e.target.nextElementSibling.classList.add('dropdown__list_active')
    }
})