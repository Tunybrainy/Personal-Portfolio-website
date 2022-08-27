  /*=================================== menu show y hidden===================================== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/*==================MMENU Show======================= */
if (navToggle) {
    navToggle.addEventListener('click', () => {
              navMenu.classList.add('show-menu')
          })
      }
/*= === === === === === == MMENU Hidden === === === === === === === == */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=========remove menu=======*/
const navLink = document.querySelectorAll('.nav_link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))