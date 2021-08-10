const prev = document.querySelector('.slider__arrow_prev')
const next = document.querySelector('.slider__arrow_next')

const sliderItems = [...document.querySelectorAll('.slider__item')]
const sliderDots = [...document.querySelectorAll('.slider__dot')]
sliderDots[0].classList.add('slider__dot_active')

sliderDots.map(dot => dot.addEventListener('click', goToSlide))

function nextSlide(e) {
    let activeIndex = sliderItems.findIndex(item => item.classList.contains('slider__item_active'))
    if(e.target.classList.contains('slider__arrow_next')) {
        activeIndex ++
        activeIndex = activeIndex ==  sliderItems.length ? 0 : activeIndex
        removeActive(activeIndex)
    } else {
        activeIndex --
        activeIndex = activeIndex < 0 ? sliderItems.length - 1 : activeIndex
        removeActive(activeIndex)
    }
    reactiveDots(activeIndex)
}

next.addEventListener('click', nextSlide)
prev.addEventListener('click', nextSlide)

function goToSlide(e) {
    let index = sliderDots.findIndex(item => item == e.target)
    removeActive(index)
    reactiveDots(index)
}

function removeActive(index) {
    sliderItems.map(item => item.classList.remove('slider__item_active'))
    sliderItems[index].classList.add('slider__item_active')
}

function reactiveDots(index) {
    sliderDots.map(item => item.classList.remove('slider__dot_active'))
    sliderDots[index].classList.add('slider__dot_active')
}