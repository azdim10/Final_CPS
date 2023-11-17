const buttonShowCheck = document.querySelector('.upperMenu_button-check')
const buttonHideCheck = document.querySelector('.feedback_btn')
const windowAdept = window.matchMedia('(min-width:760px)')
const feedbackElement = document.querySelector('.feedback')
const mainElements = document.querySelector('.main')
const headerElements = document.querySelector('.upperMenu_mob-left')
const headersElement = document.querySelector('.upperMenu_mob-right')
const footerElements = document.querySelector('.footer')
if (windowAdept.matches === false) {
  buttonShowCheck.addEventListener('click', function () {
    mainElements.classList.add('hidden')
    footerElements.classList.add('hidden')
    headersElement.classList.add('hidden')
    headerElements.classList.add('hidden')
    feedbackElement.classList.remove('hidden')
  })
  buttonHideCheck.addEventListener('click', function () {
    mainElements.classList.remove('hidden')
    footerElements.classList.remove('hidden')
    headersElement.classList.remove('hidden')
    headerElements.classList.remove('hidden')
    feedbackElement.classList.add('hidden')
  })
} else {
  buttonShowCheck.addEventListener('click', function () {
    mainElements.classList.add('smooth')
    footerElements.classList.add('smooth')
    headersElement.classList.add('smooth')
    headerElements.classList.add('smooth')
    feedbackElement.classList.remove('hidden')
  })
  buttonHideCheck.addEventListener('click', function () {
    mainElements.classList.remove('smooth')
    footerElements.classList.remove('smooth')
    headersElement.classList.remove('smooth')
    headerElements.classList.remove('smooth')
    feedbackElement.classList.add('hidden')
  })
}
