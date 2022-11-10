let sum = 10;
const sliderLine = document.querySelector('.third-section__slider-line')
document.querySelector('.next').addEventListener('click', () => {
  sum = sum - 438
  if(sum < -1314) {
    sum = 10
  }
  sliderLine.style.left = sum + 'px'
})
document.querySelector('.prev').addEventListener('click', () => {
  sum = sum + 438
  if(sum > 10) {
    sum = -1314
  }
  sliderLine.style.left = sum + 'px'
})
const search = document.querySelector('form')
const input = document.querySelector('input')
const sign = document.querySelector('.profile')
const search2 = document.querySelector('.active-2')
const debosh = document.querySelector('.debosh')
const urna = document.querySelector('.urna')
const burger = document.querySelector('.burger-2')
document.querySelector('.search').addEventListener('click', () => {
  search.classList.remove('active')
  input.classList.remove('active')
  sign.classList.add('sign')
  search2.classList.add('search-2')
  debosh.classList.add('debosh-2')
  input.classList.add('active-44')
})
document.querySelector('.urna-44').addEventListener('click', () => {
  urna.classList.remove('urna-2')
})
document.querySelector('.urna_button').addEventListener('click', () => {
  urna.classList.add('urna-2')
})
document.querySelector('.nav-menu__button').addEventListener('click', () => {
  burger.classList.toggle('burger-2')
})