const cardsBig = document.querySelectorAll('.swiper_biggest')
const mediaQuery = window.matchMedia('(min-width:975px)')
// const button = document.querySelector('.button')
// const btnShowMore = document.querySelector('.main_show')
const btnShowMoreBig = document.querySelector('.main_show-biggest')
const hiddenCardsBig = document.querySelectorAll('.cardBig')
const rotateBig = document.querySelector('.main_expand-biggest')
const HIDE = 'Скрыть'
const SHOW_ALL = 'Показать все'
function resizePage() {
  if (mediaQuery.matches === true) {
    cardsBig[6].classList.remove('cardBig', 'hide-element')
    cardsBig[7].classList.remove('cardBig', 'hide-element')
  } else {
    cardsBig[6].classList.add('cardBig', 'hide-element')
    cardsBig[7].classList.add('cardBig', 'hide-element')
  }
}
window.addEventListener('resize', resizePage)
btnShowMoreBig.addEventListener('click', function () {
  console.log('hi event')
  for (let i = 0; i < hiddenCardsBig.length; i++) {
    hiddenCardsBig[i].classList.toggle('hide-element')
    if (hiddenCardsBig[i].classList.contains('hide-element')) {
      btnShowMoreBig.textContent = 'Показать все'
      hiddenCardsBig.value = SHOW_ALL
    } else {
      btnShowMoreBig.textContent = 'Скрыть'
      hiddenCardsBig.value = HIDE
    }
  }

  if (hiddenCardsBig.value === HIDE) {
    rotateBig.style.transform = 'rotate(' + 180 + 'deg)'
  } else {
    rotateBig.style.transform = null
  }
})
console.log(cardsBig)
