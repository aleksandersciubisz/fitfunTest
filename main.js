// Hamburger menu
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: true,
      loop: false,
    },
  },
})
