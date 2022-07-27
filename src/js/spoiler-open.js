(() => {
  const menuBtnRef = document.querySelector('[data-text-button]');
  const mobileMenuRef = document.querySelector('[data-text]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
})();
