"use strict";

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
// https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html
// why doesn't page go back to the top when refreshed? // location.reload() // xy axis of page //
// want navbar to appear when user gets to the new section // is that CSS or js? // scroll to populate
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

// display summary //////////////////////////////////////////////////////////////

const displaySummary = (section) => {
  const p = document.createElement("p");
  p.setAttribute("style", "display: none");
  section.textContent = summarys["emoji"];
  section.appendChild(p);
}

// emojiSection
emojiSection.addEventListener("click", (event) => {
  displaySummary(emojiSection)
  let displaySnowmanSummary = event.target.childNodes[0].style.display;
  if (displaySnowmanSummary === "none") {
    displaySnowmanSummary = "block";
  } else {
    displaySnowmanSummary = "none";
  }
});

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
