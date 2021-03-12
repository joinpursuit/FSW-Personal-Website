const aboutSection = document.querySelector("#about-section");
const projectsSection = document.querySelector("#projects-section");
const contactSection = document.querySelector("#contact-section");

const aboutBtn = document.querySelector("#about-btn");
const projectBtn = document.querySelector("#project-btn");
const contactBtn = document.querySelector("#contact-btn");

// why doesn't page go back to the top when refreshed?

//// ***FUNCTIONS*** //////////////////////////////////////////

// Create divs with letters for my name
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
const displayNavBar = () => {
    const navItems = ["Home", "About", "Projects", "Contact"];
    const navBar = document.querySelector("nav > ul");
    for (let i = 0; i < navItems.length; i++) {
      const li = document.createElement("li");
      li.classList.add("nav-li");
      li.textContent = navItems[i];
      navBar.appendChild(li);
    }
    return navBar;
  };

// move to next section
const jumpToSection = (location) => {
    location.scrollIntoView(true);
};


//// ***EVENT LISTENERS*** ////////////////////////////////////////////////////

// display header and navbar on page load
window.addEventListener("load", () => {
    displayNavBar();
    displayLetters();
});

// move to section and display navbar with button
aboutBtn.addEventListener("click", () => {
  jumpToSection(aboutSection);
});
projectBtn.addEventListener("click", () => {
  jumpToSection(projectsSection);
});
contactBtn.addEventListener("click", () => {
  jumpToSection(contactSection);
});
