const jumpToSection = (location) => {
    location.scrollIntoView(true);
}

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
})







// aboutBtn.addEventListener("click", () => {
//     aboutSection.scrollIntoView(true);
// })


