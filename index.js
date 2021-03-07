document.addEventListener("DOMContentLoaded", () => {
    const hideSections = document.querySelectorAll(".hide")
    for(const section of hideSections){
        section.style.display = "none"
    }

    let i = 0;
    const text = "software developer"
    const speed = 70
    function typeWriter(){
        if(i < text.length){
            document.querySelector("#typetext").innerHTML += text.charAt(i++)
            setTimeout(typeWriter, speed)
        }
    }
    setTimeout(typeWriter, 1000)
    setTimeout(() => {
        const secIntro = document.querySelector(".show")
        secIntro.style.display = "none"
        secIntro.className = "hide"
        const secAbout = document.querySelector("#about")
        secAbout.style.display = ""
        secAbout.className = "show"
        document.querySelector("nav").style.display = ""
    }, 3400)

    function showSection(sectionId){
        const oldSection = document.querySelector(".show")
        oldSection.style.display = "none"
        oldSection.className = "hide"
        const showSection = document.querySelector(sectionId)
        showSection.style.display = ""
        showSection.className = "show"
    }
    const btnAbout = document.querySelector("#btn-about")
    btnAbout.addEventListener("click", () => showSection("#about"))
    const btnSkills = document.querySelector("#btn-skills")
    btnSkills.addEventListener("click", () => showSection("#skills"))
    const btnProjects = document.querySelector("#btn-projects")
    btnProjects.addEventListener("click", () => showSection("#projects"))
    const btnContact = document.querySelector("#btn-contact")
    btnContact.addEventListener("click", () => showSection("#contact"))
})