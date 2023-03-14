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
// ===TO DISPLAY ACCURATE YEAR IN PAGE FOOTER====

function displayTime(){
  var dateTime = new Date();
  var yrs = dateTime.getFullYear();

  document.querySelectorAll('#year').forEach((dateElement) => dateElement.innerHTML = yrs)
}
setInterval(displayTime, 10);

// =======DYNAMIC LINKING OF COMPLETED PROJECTS====================

const projects = [
  {
    img: './assets/mode.png',
    title: 'Automated Time Mode',
    github: 'https://github.com/Emmanuel-obiora/Mode/actions/new',
    demo: 'https://emmanuel-obiora.github.io/Mode/'
  },
  {
    img: './assets/faq.png',
    title: 'FAQ accordion card',
    github: 'https://github.com/Emmanuel-obiora/faq-accordion-card',
    demo: 'https://emmanuel-obiora.github.io/faq-accordion-card/'
  },
  {
    img : './assets/intro-with-sign-up-form.png',
    title: 'intro-component-with-sign-up-form',
    github: 'https://github.com/Emmanuel-obiora/intro-component-with-sign-up-form',
    demo: 'https://intro-with-signupform.netlify.app/'
  },
  {
    img : './assets/interactive-card.png',
    title: 'Interactive Card',
    github: 'https://github.com/Emmanuel-obiora/interactive-card/',
    demo: 'https://emmanuel-obiora.github.io/interactive-card/'
  },
  {
    img : './assets/todo-app.png',
    title: 'Todo App',
    github: 'https://github.com/Emmanuel-obiora/todo-app',
    demo: 'https://emmanuel-obiora.github.io/todo-app/'
  },
  {
    img : './assets/chat-app.png',
    title: 'Chat App',
    github: 'https://github.com/Emmanuel-obiora/chat-app',
    demo: 'https://emmanuel-obiora.github.io/chat-app/'
  }
];
// console.log(projects.img);

let data = "";
projects.map((values) => {
  // console.log(values);
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