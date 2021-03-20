const welcomeButton = document.querySelector(".btn")
welcomeButton.addEventListener("click", () => {
    document.location.href = "./about.html" 
})

const changeButton = document.querySelector(".change")
changeButton.addEventListener("click", () => {
    const header = document.querySelector("header")
    const nav = document.querySelector("nav")

    header.style.color = "#0b0b0b"
    nav.style.color = "white"
    console.log("hello");
})
