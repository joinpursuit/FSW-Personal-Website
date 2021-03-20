const homeSection = document.querySelector("#home-section");
const aboutSection = document.querySelector("#about-section");
const projectSection = document.querySelector("#project-section");
const skillsSection = document.querySelector("#skills-section");
const contactSection = document.querySelector("#contact-section");
const navBar = document.querySelector("#nav-bar")
const header = document.querySelector("#name-header")
const form = document.querySelector("#form")
let currentPage = homeSection;

document.addEventListener("DOMContentLoaded", (e) => {
    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    skillsSection.style.display = "none";
    contactSection.style.display = "none";

});

header.addEventListener("click", (e)=>{
    debugger
    if(e.target.id === "name-header"){
        currentPage.style.display = "none"
        homeSection.style.display = "block"
        currentPage = homeSection;
    }
})

navBar.addEventListener("click", (e) => {
    if(e.target.id === "about"){
        currentPage.style.display = "none"
        aboutSection.style.display = "block"
        currentPage = aboutSection;
    }
    if(e.target.id === "project"){
        currentPage.style.display = "none"
        projectSection.style.display = "block"
        currentPage = projectSection;
    }
    if(e.target.id === "skills"){
        currentPage.style.display = "none"
        skillsSection.style.display = "grid"
        currentPage = skillsSection;
    }
    if(e.target.id === "contact"){
        currentPage.style.display = "none"
        contactSection.style.display = "block"
        currentPage = contactSection;
    }
    

});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    form.style.display = "none";

    let p = document.createElement("p")
    p.id = "thanks-message"
    p.textContent = "Thank you. Your message has been sent."
    contactSection.appendChild(p)
})