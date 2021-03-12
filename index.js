// why doesn't page go back to the top when refreshed?

// split name into array
const displayLetters = () => {
  const name = document.querySelector("#name");
  const nameArray = name.textContent.split("");
  name.textContent = "";
  for (let i = 0; i < nameArray.length; i++) {
      const div = document.createElement("div");
      div.setAttribute("id", "letter" + i);
      div.classList.add("letters");
      div.textContent = nameArray[i];
      name.appendChild(div);
  }
  return name;
};

window.addEventListener("load", displayLetters);

// point button to next section
const jumpToSection = (location) => {
  location.scrollIntoView(true);
};

const aboutBtn = document.querySelector(".about-btn");
const aboutSection = document.querySelector("#about-section");

aboutBtn.addEventListener("click", () => {
  jumpToSection(aboutSection);
});

const projectBtn = document.querySelector("#project-btn");
const projectsSection = document.querySelector("#projects-section");

projectBtn.addEventListener("click", () => {
  jumpToSection(projectsSection);
});

const contactBtn = document.querySelector("#contact-btn");
const contactSection = document.querySelector("#contact-section");

contactBtn.addEventListener("click", () => {
  jumpToSection(contactSection);
});

//



// generate nav to each section
// const homeSection = document.querySelector("#home-section");

// const createNav = (section) => {
//     const navLinks = ["Home", "About", "Project", "Contact"];
//     const nav = document.createElement("nav");
//     const ul = document.createElement("ul");
//     section.appendChild(nav);
//     nav.appendChild(ul);
//     for (let i = 0; i < navLinks.length; i++) {
//         const li = document.createElement("li");
//         li.textContent = navLinks[i];
//         ul.appendChild(li);
//     }

// }

// const setLiAttribute = (id) => {
//     li.setAttribute("href", id);
// }
