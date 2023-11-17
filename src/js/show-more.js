const cards = document.querySelectorAll('.swiper-slide')
const cardsBig = document.querySelectorAll('.swiper-slide-biggest')
const mediaQuery = window.matchMedia('(min-width:975px)')
const button = document.querySelector('.button')
const btnShowMore = document.querySelector('.main_show')
const btnShowMoreBig = document.querySelector('.main_show-biggest')
const hiddenCards = document.querySelectorAll('.card')
const hiddenCardsBig = document.querySelectorAll('.cardBig')
const rotate = document.querySelector('.main_expand')
const HIDE = 'Скрыть'
const SHOW_ALL = 'Показать все'
function resizePage() {
  if (mediaQuery.matches === true) {
    cards[6].classList.remove('card', 'hide-element')
    cards[7].classList.remove('card', 'hide-element')
  } else {
    cards[6].classList.add('card', 'hide-element')
    cards[7].classList.add('card', 'hide-element')
  }
}
window.addEventListener('resize', resizePage)
btnShowMore.addEventListener('click', function () {
  console.log('hi event')
  for (let i = 0; i < hiddenCards.length; i++) {
    hiddenCards[i].classList.toggle('hide-element')
    if (hiddenCards[i].classList.contains('hide-element')) {
      btnShowMore.textContent = 'Показать все'
      hiddenCards.value = SHOW_ALL
    } else {
      btnShowMore.textContent = 'Скрыть'
      hiddenCards.value = HIDE
    }
  }

  if (hiddenCards.value === HIDE) {
    rotate.style.transform = 'rotate(' + 180 + 'deg)'
  } else {
    rotate.style.transform = null
  }
})
