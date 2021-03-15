const homeSection = document.querySelector("#home-section");
const aboutSection = document.querySelector("#about-section");
const projectsSection = document.querySelector("#projects-section");
const contactSection = document.querySelector("#contact-section");

const aboutBtn = document.querySelector("#about-btn");
const projectBtn = document.querySelector("#project-btn");
const contactBtn = document.querySelector("#contact-btn");

// why doesn't page go back to the top when refreshed?
// I saw innerHTML being used to create tags // EXAMPLE: section.innerHTML = "<span id="create">" + "hello" + "</span>" // which is industry standard?

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

// const hrefValue2 = {
//   homeSection: "#home-nav",
//   aboutSection: "#about-nav",
//   projectsSection: "#projects-nav",
//   contactSection: "#contact-nav",
// };

const tags = {
  home: {nav: "#home-nav", ul: "#home-ul"},
  about: {nav: "#about-nav", ul: "#about-ul"},
  projects: {nav: "#projects-nav", ul: "#projects-ul"},
  contact: {nav: "#contact-nav", ul: "#contact-ul"},
};
// const section = document.querySelectorAll("body > section");

// nav is created in the correct section
// but ul does not know where to append ***appending ul to home only***
// create id to grab nav in the correct section
// then repeat for ul

const createNav = (grabTag, key) => {
  const nav = document.createElement("nav");
  nav.setAttribute("id", tags[key]["nav"]);
  grabTag.prepend(nav);
};



const createUl = () => {

  // we invoke function
// if  (jumpToSection(aboutSection)) {
// } then nav = document.querySelector("nav")
// else {
// }const nav = document.querySelector("nav")

  const nav = document.querySelector("nav");
  // ***** the problem starts here *****////
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
  debugger;
  return navItems;
};

// move to next section
const jumpToSection = (section) => {
  section.scrollIntoView(true);
};

//// ***EVENT LISTENERS*** ////////////////////////////////////////////////////

// display header and navbar on page load
window.addEventListener("load", () => {
  createNav(homeSection, "home");
  createUl();
  displayNavBar();
  displayLetters();
});

// move to section and display navbar with button
aboutBtn.addEventListener("click", () => {
  createNav(aboutSection, "about");
  createUl(aboutSection, ); // ul created
  // displayNavBar();
  jumpToSection(aboutSection);
});
projectBtn.addEventListener("click", () => {
  // createUl();
  // displayNavBar();
  createNav(projectsSection, "projects");
  jumpToSection(projectsSection);
});
contactBtn.addEventListener("click", () => {
  // createUl();
  // displayNavBar();
  createNav(contactSection, "contact");
  jumpToSection(contactSection);
});
