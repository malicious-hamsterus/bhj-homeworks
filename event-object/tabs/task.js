const tabBlock = document.querySelector('#tabs1')
const tabs = [...tabBlock.querySelectorAll('.tab')]
const tabContents = [...tabBlock.querySelectorAll('.tab__content')]

tabs.map(tab => {
    tab.addEventListener('click', function(e) {
        const activeIndex = tabs.indexOf(e.target)
        console.log(tabs.indexOf(e.target))
        deactiveContent('.tab__content', 'tab__content_active', tabBlock)
        deactiveContent('.tab', 'tab_active', tabBlock)

        tabs[activeIndex].classList.add('tab_active')
        tabContents[activeIndex].classList.add('tab__content_active')
    })
})

function deactiveContent(elements, activeClass, block) {
    [...block.querySelectorAll(elements)].map(item => {
        item.classList.remove(activeClass)
    })
}