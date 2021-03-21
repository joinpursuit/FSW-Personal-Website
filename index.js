"use strict";


//////////////////// ***GLOBAL VARIABLES*** ///////////////////////////
const navIds = ["#home-section", "#about-section", "#projects-section", "#contact-section"]
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
const projectsBtn = document.querySelector("#projects-btn");
const summarys = {
  emoji:
    "A web app that allows users to select the number of randomly generated emojis. Users can submit a story about the emojis. A numeric value is displayed of the total stories created and the past stories populated in list-style.",
  about:
    "Client-focused, community-minded software developer who is with a passion for developing applications to improve user accessibility. Outside of coding, I am active in my community in youth and young adult development. My love for traveling allows me to appreciate the differences in humanity and how I can add value to my community",
  snowman:
    "A text-based word guessing game that allows users to guess one letter at a time. Each mystery letter is represented by a dash until the user guesses correctly.",
};

const snowmanSection = document.querySelector("#snowman-section");
const emojiSection = document.querySelector("#emoji-section");

const contactSection = document.querySelector("#contact-section");
const contactBtn = document.querySelector("#contact-btn");

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

// create navBar ///////////////////////////////////////////////////
const createNavbar = (section) => {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  section.prepend(nav);
  nav.appendChild(ul);
  navListItems.forEach((listItem, i) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = listItem;
    ul.appendChild(li);
    li.appendChild(a);
    a.href = navIds[i].toLowerCase()
  });
};

// move to next section ////////////////////////////////////////////////////////
const jumpToSection = (section) => {
  section.scrollIntoView(true);
};

//// ***EVENT LISTENERS*** ////////////////////////////////////////////////////

// display header and navbar on page load
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  createNavbar(homeSection);
  displayLetters();
});

// move to section and display navbar with button
aboutBtn.addEventListener("click", () => {
  createNavbar(aboutSection);
  jumpToSection(aboutSection);
});
projectsBtn.addEventListener("click", () => {
  createNavbar(projectsSection);
  jumpToSection(projectsSection);
});
contactBtn.addEventListener("click", () => {
  createNavbar(contactSection);
  jumpToSection(contactSection);
});
