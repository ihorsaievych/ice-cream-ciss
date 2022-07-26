const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',

    clickable: true,

    dynamicBullets: true,
  },

  simulateTouch: true,
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  initialSlide: 2,
});
