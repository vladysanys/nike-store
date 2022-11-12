var b = document.querySelector('body');
var w = b.clientWidth || b.offsetWidth
let sum2 = 0;
let sum = 10;
const navMenuHr = document.querySelector('.nav-menu__button_hr')
const navMenuHr2 = document.querySelector('.hr-1')
const navMenuHr3 = document.querySelector('.hr-2')
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
  navMenuHr.classList.toggle('hr-active')
  navMenuHr2.classList.toggle('hr-deactive')
  navMenuHr3.classList.toggle('hr-active-2')
  burger.classList.toggle('burger-2')
})
const sliderLine = document.querySelector('.third-section__slider-line')

if(b.clientWidth <= 450 || b.offsetWidth <= 450) {
  document.querySelector('.next-2').addEventListener('click', () => {
    sum2 = sum2 - 401
    if(sum2 < -2005) {
      sum2 = 0
    }
    sliderLine.style.left = sum2 + 'px'
    })
    
  document.querySelector('.prev-2').addEventListener('click', () => {
      sum2 = sum2 + 401
      if(sum2 > 0) {
        sum2 = -2005
      }
      sliderLine.style.left = sum2 + 'px'
      })
  } else {
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
}
