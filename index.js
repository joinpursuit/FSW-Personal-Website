const homeSection = document.querySelector("#home-section");
const aboutSection = document.querySelector("#about-section");
const projectsSection = document.querySelector("#projects-section");
const contactSection = document.querySelector("#contact-section");

const aboutBtn = document.querySelector("#about-btn");
const projectBtn = document.querySelector("#project-btn");
const contactBtn = document.querySelector("#contact-btn");

// why doesn't page go back to the top when refreshed?
// I saw innerHTML being used to create tags // EXAMPLE: section.innerHTML = "<span>" + "hello" + "</span>" // which is industry standard?

//// ***FUNCTIONS*** //////////////////////////////////////////

// create divs with letters for my name
const displayLetters = () => {
  const coreenInAnArray = [
    "C",
    "o",
    "r",
    "e",
    "e",
    "n",
    "",
    "C",
    "o",
    "o",
    "p",
    "e",
    "r",
  ];
  const header = document.querySelector("header");
  for (let i = 0; i < coreenInAnArray.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "letter" + i);
    div.classList.add("letters");
    div.textContent = coreenInAnArray[i];
    header.appendChild(div);
  }
  return header;
};

// create navbar
// how could I make this cleaner?
// use map or object
const navItems = ["Home", "About", "Projects", "Contact"];
const hrefValues = [
  "#home-section",
  "#about-section",
  "#projects-section",
  "#contact-section",
];
// const section = document.querySelectorAll("body > section");

const createUl = () => {
  const nav = document.querySelector(section); // keeps appending to this nav. how to select different nav
  const ul = document.createElement("ul");
  nav.appendChild(ul);
};

const displayNavBar = () => {
  const ul = document.querySelector("ul");
  for (let i = 0; i < navItems.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.classList.add("nav-li");
    a.setAttribute("href", hrefValues[i]);
    li.textContent = a[i];
    a.textContent = navItems[i];
    ul.appendChild(li);
    li.appendChild(a);
  }
  return navItems;
};

const createNav = () => {
  const section = document.querySelectorAll("section");
  const nav = document.createElement("nav");
  section.prepend(nav);
  createUl();
  displayNavBar();
};

// move to next section
const jumpToSection = (section) => {
  section.scrollIntoView(true);
};

//// ***EVENT LISTENERS*** ////////////////////////////////////////////////////

// display header and navbar on page load
window.addEventListener("load", () => {
  createNav(homeSection);
  displayLetters();
});

// move to section and display navbar with button
// nav not created in about section?
aboutBtn.addEventListener("click", () => {
  createNav(aboutSection);
  jumpToSection(aboutSection);
});
projectBtn.addEventListener("click", () => {
  createNav(projectsSection);
  jumpToSection(projectsSection);
});
contactBtn.addEventListener("click", () => {
  createNav(contactSection);
  jumpToSection(contactSection);
});
