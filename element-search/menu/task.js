const menuLink = [...document.querySelectorAll('.menu__link')]

menuLink.map(link => {
    link.addEventListener('click', function(e) {
        if(e.target.nextElementSibling.classList.contains('menu_sub')) {
            e.preventDefault()
            activeMenuRemover(e)
            e.target.nextElementSibling.classList.toggle('menu_active')
        }
    })
})

function activeMenuRemover(e) {
    const menus = [...document.querySelectorAll('.menu_active')]

    menus.map(menu => {
        if(menu != e.target.nextElementSibling) {
            menu.classList.remove('menu_active')
        }
    })
}