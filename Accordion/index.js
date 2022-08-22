const plusIcon = document.querySelectorAll('.plus-icon')
const minusIcon = document.querySelectorAll('.minus-icon')
const faqAnswer = document.querySelectorAll('.faq-answer')
const faqQues = document.querySelectorAll('.faq-question')


for(let i=0;i<faqQues.length;i++){
  plusIcon[i].addEventListener('click', () => {
    faqAnswer[i].classList.add('show')
    minusIcon[i].style.display = "block"
    plusIcon[i].style.display="none"
  })
}
for(let i=0;i<faqQues.length;i++){
  minusIcon[i].addEventListener('click', () => {
    faqAnswer[i].classList.remove('show')
    minusIcon[i].style.display = "none"
    plusIcon[i].style.display="block"
  })
}

//only 1 active at a time
