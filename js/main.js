let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
  }
});

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
  const menu = document.querySelector('.header');
  menu.classList.toggle('header-active');
  menuButton.classList.toggle('menu-button-active');
});