const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
const closeMobileMenu = document.querySelectorAll('[data-close-button]');
const mainTag = document.querySelector('.main');
const menuContainer = document.querySelector('.mobile-menu-list');
const humburgerButton = document.querySelector('.hamburger-btn');

const mobileMenu = document.querySelector('.mobile-menu');

function openMenu(mobileMenu, mainTag, humburgerButton) {
  if (mobileMenu == null) {
    return;
  }
  mobileMenu.classList.add('active');
  mainTag.classList.add('fixed_postion');
  humburgerButton.classList.add('hide');
}

function closeMenu(mobileMenu) {
  if (mobileMenu == null) {
    return;
  }
  mainTag.classList.remove('fixed_postion');
  mobileMenu.classList.remove('active');
  humburgerButton.classList.remove('hide');
}
openMobileMenu.forEach((button) => {
  button.addEventListener('click', () => {
    const mobileMenu = document.querySelector(button.dataset.mobileMenuTarget);
    openMenu(mobileMenu, mainTag, humburgerButton);
  });
});

closeMobileMenu.forEach((button) => {
  button.addEventListener('click', () => {
    const mobileMenu = button.closest('.mobile-menu');
    closeMenu(mobileMenu);
  });
});

menuContainer.addEventListener('click', () => {
  mainTag.classList.remove('fixed_postion');
  mobileMenu.classList.remove('active');
  humburgerButton.classList.remove('hide');
});