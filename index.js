document.addEventListener("DOMContentLoaded", () => {
    const hideSections = document.querySelectorAll(".hide")
    for(const section of hideSections){
        section.style.display = "none"
    }

    let i = 0;
    const text = "software developer"
    const speed = 70 //70
    function typeWriter(){
        if(i < text.length){
            document.querySelector("#typetext").innerHTML += text.charAt(i++)
            setTimeout(typeWriter, speed)
        }
    }
    setTimeout(typeWriter, 1000) //1000
    setTimeout(() => {
        const secIntro = document.querySelector(".show")
        secIntro.style.display = "none"
        secIntro.className = "hide"
        const secAbout = document.querySelector("#about")
        secAbout.style.display = ""
        secAbout.className = "show"
        document.querySelector("nav").style.display = ""
    }, 3400) //3400

    function showSection(sectionId){
        const oldSection = document.querySelector(".show")
        oldSection.style.display = "none"
        oldSection.className = "hide"
        const newSection = document.querySelector(sectionId)
        newSection.style.display = ""
        newSection.className = "show"
    }
    (function btnAddEvent(){
        const allBtn = document.querySelectorAll(".nav-button")
        for(const btn of allBtn){
            btn.addEventListener("click", () => showSection(`#${btn.id.split("-")[1]}`))
        }
    }())
    const btnAboutShowmore = document.querySelector("#btn-about-showmore")
    btnAboutShowmore.addEventListener("click", (e) => {
        const msg4 = document.querySelector("#msg4")
        const read = e.target.textContent === "read more"
        e.target.textContent = read ? "show less" : "read more"
        msg4.className = read ? "show" : "hide"
        msg4.style.display = read ? "" : "none"
    })
})