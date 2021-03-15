"use strict"

//////////////////// ***GLOBAL VARIABLES*** ///////////////////////////
const navListItems = ["Home", "About", "Projects", "Contact"];
const homeSection = document.querySelector("#home-section");
const name = document.querySelector("#name");
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

const aboutSection = document.querySelector("#about-section");
const aboutBtn = document.querySelector("#about-btn");

const projectsSection = document.querySelector("#projects-section");
const projectBtn = document.querySelector("#project-btn");

const contactSection = document.querySelector("#contact-section");
const contactBtn = document.querySelector("#contact-btn");


// why doesn't page go back to the top when refreshed? // location.reload() // 
// want navbar to appear when user gets to the new section // is that CSS or js? //
// is it better to have all the global variables at the top or next to the function? //
// is it better to have the variable declared in the function it's being used in or global? //

///////////////////////// ***FUNCTIONS*** ////////////////////////////////

// create divs with letters for my name ///////////////////////////////
const displayLetters = () => {
  coreenInAnArray.forEach((letter, i) => {
    const div = document.createElement("div");
    div.setAttribute("id", "letter" + i);
    div.classList.add("letters");
    div.textContent = letter;
    name.appendChild(div);
  });
};

// create navBar //////////////////////////////////////////////////////////
const createNavbar = (section) => {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  section.prepend(nav);
  nav.appendChild(ul);
  navListItems.forEach((listItem) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = listItem;
    ul.appendChild(li);
    li.appendChild(a);
  });
};

// move to next section ////////////////////////////////////////////////////////
const jumpToSection = (section) => {
  section.scrollIntoView(true);
};

//// ***EVENT LISTENERS*** ////////////////////////////////////////////////////

// display header and navbar on page load
window.addEventListener("load", () => {
  createNavbar(homeSection);
  displayLetters();
});

// move to section and display navbar with button
aboutBtn.addEventListener("click", () => {
  createNavbar(aboutSection);
  jumpToSection(aboutSection);
});
projectBtn.addEventListener("click", () => {
  createNavbar(projectsSection);
  jumpToSection(projectsSection);
});
contactBtn.addEventListener("click", () => {
  createNavbar(contactSection);
  jumpToSection(contactSection);
});

