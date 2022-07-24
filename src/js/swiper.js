const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',

    clickable: true,
  },

  simulateTouch: true,
  grabCursor: true,
  spaceBetween: 10,
});
