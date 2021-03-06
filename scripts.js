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

const projectDetails = document.querySelectorAll('.see-project-btn');
const projectDetail = document.querySelector('.project-detail');

const projects = [
  {
    id: '1',
    name: 'EFoye',
    description: "Efoye is a E-commerce web application where users can register and buy baby bed's.Logged-in users can also interact with other parents and post and read from the community forum.Build with JavaScript ,React and Context .",
    featured_image: './Images/LivePortfolio/Efoye.png',
    link_to_live: ['See live', './Images/detailProjectLive.png','https://iot-bbms-development.web.app/landing-page'],
    link_to_source: ['See source', './Images/detailProjectGit.png','https://github.com/Efoye-team/Web-app'],
    technologies: ['react','react-router','react-context'],
    name_detail: ['Efoye', 'Full Stack Dev', '2015'],
  },
  {
    id: '2',
    name: 'COVID 19 Metrics',
    description: "covid-metrics is a web-app for user's to get real time Corona virus cases throughout the world.",
    featured_image: './Images/LivePortfolio/covid-metrics.png',
    link_to_live: ['See live', './Images/detailProjectLive.png',"https://covid-metric.netlify.app/"],
    link_to_source: ['See source', './Images/detailProjectGit.png','https://github.com/Gedewon/covid-metrics'],
    technologies: ['react', 'react-router', 'Redux','Tailwind'],
    name_detail: ['COVID', 'Front End Dev', '2020'],
  },
  {
    id: '3',
    name: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    featured_image: './Images/work-three-img.jpg',
    link_to_live: ['See live', './Images/detailProjectLive.png'],
    link_to_source: ['See source', './Images/detailProjectGit.png'],
    technologies: ['html', 'css', 'javaScript','react','react-router','react-context'],
    name_detail: ['EFOYE', 'FULL STACK DEV', '2020'],
  },
  {
    id: '4',
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    featured_image: './Images/work-four-img.jpg',
    link_to_live: ['See live', './Images/detailProjectLive.png'],
    link_to_source: ['See source', './Images/detailProjectGit.png'],
    technologies: ['html', 'css', 'javaScript'],
    name_detail: ['CANOPY', 'Back End Dev', '2015'],
  },
];
projectDetails.forEach((button) => {
  button.addEventListener('click', (e) => {
    const selectedProject = projects.filter((project) => project.id === e.target.id)[0];
    mainTag.classList.add('fixed_postion');
    projectDetail.classList.add('active');
    projectDetail.innerHTML = `
      <article class="work-container flex project-detail-article project-flex">
          <div class="project-detail-header">
            <h3>${selectedProject.name}</h3>
            <button data-close-button class="close-button-project">&times;</button>
         </div>
         <div class="client-des">
            <ul class="client-name">
              <li>${selectedProject.name_detail[0]}</li>
            </ul>
            <ul>
              <li>${selectedProject.name_detail[1]}</li>
            </ul>
            <ul>
              <li>${selectedProject.name_detail[2]}</li>
            </ul>
          </div>
        <div class="work-img">
          <img class="work-img" src=${selectedProject.featured_image} alt="Picture for the project Tonic, showing a laptop and a widescreen." />
        </div>
        <div class="work-description-project project-detail-work-description">
          <p>
            ${selectedProject.description}
          </p>
          <div class="project-detail-tech-btns">
          <ul class="buttons project-detail-buttons">
            <li><button type="button">${selectedProject.technologies[0]}</button></li>
            <li><button type="button">${selectedProject.technologies[1]}</button></li>
            <li><button type="button">${selectedProject.technologies[2]}</button></li>
          </ul>
          <div class="project-detail-buttons">
              <a href=${selectedProject.link_to_live[2]}><button class="see-project-btn see-source">${selectedProject.link_to_live[0]}
                <img class="see-source-img" src=${selectedProject.link_to_live[1]} alt="" /></button>
              </a>
              <a href=${selectedProject.link_to_source[2]}><button class="see-project-btn see-source">${selectedProject.link_to_source[0]}
                <img class="see-source-img" src=${selectedProject.link_to_source[1]} alt="" /></button>
              </a>
          </div>
          </div>
        </div>
      </article>`;
    const projectDetailClose = document.querySelector('.close-button-project');
    projectDetailClose.addEventListener('click', () => {
      mainTag.classList.remove('fixed_postion');
      projectDetail.classList.remove('active');
    });
  });
});

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, invalidMsg) {
  if (!hasValue(input, invalidMsg)) {
    return false;
  }
  const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})*(\.[a-z]{0,2})*$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#myForm');
const EMAIL_INVALID = 'Please enter a correct email address format. Uppercase not allowed in this field!!';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});

const inputElements = document.querySelectorAll('#fullName, #email, #comment');

(() => {
  const lookUpTable = {
    0: 'fullName',
    1: 'email',
    2: 'comment',
  };
  if (localStorage.length > 0) {
    for (let i = 0; i < inputElements.length; i += 1) {
      inputElements[i].value = localStorage.getItem(lookUpTable[i.toString()]);
    }
  }
})();

inputElements.forEach((el) => el.addEventListener('change', (e) => {
  localStorage.setItem(e.target.id, e.target.value);
}));
