// ===FUNCTION FOR THE TOGGLE BUTTON============
const menu = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const modalB = document.getElementById('hideScreen');

let showMenu = false;

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    modalB.classList.add('open-modal');

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    modalB.classList.remove('open-modal');

    showMenu = false;
  }
}

// =======DYNAMIC LINKING OF COMPLETED PROJECTS====================

const projects = [
  {
    img: './assets/mode.png',
    title: 'Automated Time Mode',
    github: 'https://github.com/Emmanuel-obiora/Mode/actions/new',
    demo: 'https://emmanuel-obiora.github.io/Mode/'
  },
  {
    img: './assets/hotel.png',
    title: 'Responsive Hotel Page',
    github: 'https://github.com/tolujacob05/HOTEL-project',
    demo: 'https://vimeo.com/774855500'
  },
  {
    img : './assets/home.png',
    title: 'My Portfolio',
    github: 'https://github.com/Emmanuel-obiora/portfolio-about-me-',
    demo: 'https://emmanuel-obiora.github.io/portfolio-about-me-/web-content/index.html'
  },
  {
    img : './assets/news-homepage.png',
    title: 'News Homepage',
    github: 'https://github.com/Emmanuel-obiora/news-homepage-panther',
    demo: 'https://emmanuel-obiora.github.io/news-homepage-panther/'
  },
  {
    img : './assets/todo-app.png',
    title: 'Todo App',
    github: 'https://github.com/Emmanuel-obiora/todo-app',
    demo: 'https://emmanuel-obiora.github.io/todo-app/'
  }
];
// console.log(projects.img);

let data = "";
projects.map((values) => {
  console.log(values);
   data+= `<article class="portfolio_item">
              <div class="portfolio_item-image">
                <img src=${values.img} alt=${values.title}>
              </div>
              <h3>${values.title}</h3>
              <div class="portfolio_item-cta">
                <a rel="noopener" href=${values.github} alt="Github profile view" target="_blank" class="btn">Github</a>
                <a rel="noopener" href=${values.demo} alt="Live demo" target="_blank" class="btn btn-primary">Live Demo</a>
              </div>
            </article>`
});
document.getElementById("projects").innerHTML=data;
// console.log(data);