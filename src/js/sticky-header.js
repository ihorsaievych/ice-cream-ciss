window.onscroll = function showHeader() {
  var header = document.querySelector('.hero-header-fixed');

  if (window.pageYOffset > 400) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
};
