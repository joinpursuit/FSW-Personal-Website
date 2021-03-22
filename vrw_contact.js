const homeLink = document.querySelector("#home-link");

homeLink.addEventListener("mouseenter", (e) => {
    e.target.style.textShadow = "1px 1px 2px #8bbbae, 0 0 25px #2d213f, 0 0 5px #8bbbae";
})

homeLink.addEventListener("mouseleave", (e) => {
    e.target.style.textShadow = "0px 0px 0px #ECECFA, 0 0 0px #ECECFA, 0 0 0px #ECECFA";
})

const abtMeLink = document.querySelector("#aboutMe-link");

abtMeLink.addEventListener("mouseenter", (e) => {
    e.target.style.textShadow = "1px 1px 2px #8bbbae, 0 0 25px #2d213f, 0 0 5px #8bbbae";
})

abtMeLink.addEventListener("mouseleave", (e) => {
    e.target.style.textShadow = "0px 0px 0px #ECECFA, 0 0 0px #ECECFA, 0 0 0px #ECECFA";
})


const projectLink = document.querySelector("#pro-link");

projectLink.addEventListener("mouseenter", (e) => {
    e.target.style.textShadow = "1px 1px 2px #8bbbae, 0 0 25px #2d213f, 0 0 5px #8bbbae";
})

projectLink.addEventListener("mouseleave", (e) => {
    e.target.style.textShadow = "0px 0px 0px #ECECFA, 0 0 0px #ECECFA, 0 0 0px #ECECFA";
})