document.addEventListener("DOMContentLoaded", () => {

    let front = document.querySelector("#front")
    let back = document.querySelector("#back")
    let frontendSection = document.querySelector(".frontend")
    let backendSection = document.querySelector(".backend")
    

    front.addEventListener("click", event => {
        event.preventDefault() 
        
        frontendSection.classList.toggle("showFrontend")
    })

    back.addEventListener("click", event => {
        event.preventDefault() 

        backendSection.classList.toggle("showBackend")
        
    })


})