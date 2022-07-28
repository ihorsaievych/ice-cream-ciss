(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnRefSticky = document.querySelector('[data-menu-button-sticky]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');
  const mobileLinkAboutClose = document.querySelector('.about-close');
  const mobileLinkHowMadeClose = document.querySelector('.how-made-close');
  const mobileLinkProductsClose = document.querySelector('.products-close');
  const mobileLinkContactsClose = document.querySelector('.contacts-close');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  menuBtnRefSticky.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileLinkAboutClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileLinkHowMadeClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileLinkProductsClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileLinkContactsClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
})();
