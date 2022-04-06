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

const projectDetails = document.querySelectorAll('.see-project-btn')
const projectDetail = document.querySelector('.project-detail');


const projects = [
  {
      id: 1,
      name:  "Tonic",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      featured_image: "./Images/work-one-img.jpg",
      link_to_live: ["See live", "./Images/detailProjectLive.png"],
      link_to_source: ["See source", "./Images/detailProjectGit.png"],
      technologies: ["html", "css", "javaScript"],
      name_detail: ["CANOPY", "Back End Dev", "2015"]
  },
  {
      id: 2,
      name:  "Multi-Post Stories",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      featured_image: "./Images/work-two-img.jpg",
      link_to_live: ["See live", "./Images/detailProjectLive.png"],
      link_to_source: ["See source", "./Images/detailProjectGit.png"],
      technologies: ["html", "css", "javaScript"],
      name_detail: ["CANOPY", "Back End Dev", "2015"]
  },
  {
      id: 3,
      name:  "Tonic",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      featured_image: "./Images/work-three-img.jpg",
      link_to_live: ["See live", "./Images/detailProjectLive.png"],
      link_to_source: ["See source", "./Images/detailProjectGit.png"],
      technologies: ["html", "css", "javaScript"],
      name_detail: ["CANOPY", "Back End Dev", "2015"]
  },
  {
      id: 4,
      name:  "Multi-Post Stories",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      featured_image: "./Images/work-four-img.jpg",
      link_to_live: ["See live", "./Images/detailProjectLive.png"],
      link_to_source: ["See source", "./Images/detailProjectGit.png"],
      technologies: ["html", "css", "javaScript"],
      name_detail: ["CANOPY", "Back End Dev", "2015"]
  }
]