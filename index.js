const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");
const aboutSection = document.querySelector("#about-section");
const contactSection = document.querySelector("#contact-section");
const headerSection = document.querySelector("#header-section");
const body = document.querySelector("body");
const aboutButton = document.querySelector("#about-button");
const contactButton = document.querySelector("#contact-button");
const projectsButton = document.querySelector("#projects-button");
const skillsButton = document.querySelector("#skills-button");
const themeStylesheet = document.getElementById("theme");
const themeToggle = document.getElementById("dark-mode-button");

const aboutText = [
  `I am an ecuadorian new yorker raised in Harlem. I enjoy the outdoor activities are my favorite,
   I also enjoy watching soccer and films with a heavy emphasis in comedy`,
  `Learning about tech on a dailiy basis is very enjoyable because it's fast growth pushes everything it touches better.
    It is important to understand how this growth affects us, everyday it is more integrated in 
    our lives, shaping the way we think.`,
];
const projectsArray = [
  {
    name: "Jokes",
    description:
      "An app that generates jokes from a random or specified catergory, by iterating through javasrcipt methods until the desired outcome is rendered.",
    gitLink:
      "https://github.com/bedonjonathan/Pursuit-Core-Web-Promises-Fetch-Lab-v2",
    imgLink: "./jokes.png",
  },
  {
    name: "Emojis Story Generator",
    description:
      " This is an application that renders a specified number of emojis, and allows you to attatch a text to it, as well as log this newwly combined infomation and save it in our local storage and it also displays this newaly formmed array",
    gitLink:
      "https://github.com/bedonjonathan/fsw-mid-module-two-practice-assessment",
    imgLink: "./emojis.png",
  },
];
const skillsObject = [
  { name: "Node.js", nameClass: "devicon-nodejs-plain" },
  { name: "CSS", nameClass: "devicon-css3-plain" },
  { name: "HTML", nameClass: "devicon-html5-plain" },
  { name: "JavaScript", nameClass: "devicon-javascript-plain" },
];
const contactObject = [
  {
    name: " LinkedIn ",
    href: "https://www.linkedin.com/in/jonathan-bedon-528501123/",
  },
  { name: " GitHub ", href: "https://github.com/bedonjonathan" },
  { name: "Email Me Here ", href: "mailto:jonathanbedon@pursuit.org" },
];

const resetHomePage = () => {
  aboutSection.innerHTML = "";
  skills.innerHTML = "";
  projects.innerHTML = "";
  contactSection.innerHTML = "";
};

aboutButton.addEventListener("click", (e) => {
  e.preventDefault;
  resetHomePage();
  const section = document.createElement("section");
  section.id = "about-section";
  const firstPicDiv = document.createElement("div");
  const secondPicDiv = document.createElement("div");
  firstPicDiv.innerText = aboutText[0];
  secondPicDiv.innerText = aboutText[1];
  aboutSection.appendChild(firstPicDiv);
  aboutSection.appendChild(secondPicDiv);
});
contactButton.addEventListener("click", (e) => {
  resetHomePage();
  const label = document.createElement("label");
  label.innerText = "Contanct information";
  contactSection.appendChild(label);
  contactObject.forEach((el) => {
    const link = document.createElement("a");
    link.href = el.href;
    link.innerText = el.name;
    contactSection.appendChild(link);
  });
});
projectsButton.addEventListener("click", (e) => {
  resetHomePage();
  projectsArray.forEach((project) => {
    const sectionP = document.createElement("section");
    const title = document.createElement("h3");
    title.innerText = project.name;
    const img = document.createElement("img");
    img.src = project.imgLink;
    const des = document.createElement("p");
    des.innerText = project.description;
    const gitL = document.createElement("a");
    gitL.href = project.gitLink;
    gitL.innerText = "GitHub Link";
    sectionP.appendChild(title);
    sectionP.appendChild(img);
    sectionP.appendChild(des);
    sectionP.appendChild(gitL);
    projects.appendChild(sectionP);
  });
});
skillsButton.addEventListener("click", (e) => {
  resetHomePage();
  const sectiontitle = document.createElement("h3");
  sectiontitle.innerText = "Skills";
  skillsObject.forEach((skill) => {
    const skillSection = document.createElement("section");
    const img = document.createElement("i");
    img.className = skill.nameClass;
    img.innerText = skill.name;
    skillSection.appendChild(img);
    skills.appendChild(skillSection);
  });
});

themeToggle.addEventListener("click", () => {
  if (themeStylesheet.href.includes("light")) {
    themeStylesheet.href = "./index.css";
    themeToggle.innerText = "Switch to light mode";
  } else {
    themeStylesheet.href = "./light-theme.css";
    themeToggle.innerText = "Switch to dark mode";
  }
});
