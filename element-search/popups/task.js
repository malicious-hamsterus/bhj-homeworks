const modalMain = document.querySelector('#modal_main')
const modalSuccess = document.querySelector('#modal_success')
const btnShowSuccess = document.querySelector('.show-success')
const btnSuccess = document.querySelector('.btn_success')
const btnsClose = [...document.querySelectorAll('.modal__close')]

addRemoveActive(modalMain, true)

btnShowSuccess.addEventListener('click', function() {
    addRemoveActive(modalSuccess, true)
})

btnsClose.map(btnClose => {
    btnClose.addEventListener('click', function(e) {
        addRemoveActive(e.target.parentNode.parentNode)
    })
})

btnSuccess.addEventListener('click', function() {
    addRemoveActive(modalSuccess)
})

function addRemoveActive(node, isAdd) {
    if(isAdd) {
        node.classList.add('modal_active')
    } else {
        node.classList.remove('modal_active')
    }
}