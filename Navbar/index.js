const button = document.querySelector('.nav-toggle')
const menuList = document.querySelector('.links')

button.addEventListener('click', () => {
  menuList.classList.toggle("show-links");
})
