const viewBtn = document.querySelector('.view-btn')
const closeBtn = document.querySelector('.close-btn')

const hero = document.querySelector('.hero')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

viewBtn.addEventListener('click', () => {
  overlay.style.visibility="visible"
  hero.style.display="none"
  modal.style.display="block"
})
closeBtn.addEventListener('click', () => {
  overlay.style.visibility="hidden"
  hero.style.display="display"
  modal.style.display="none"
})
