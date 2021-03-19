document.addEventListener("DOMContentLoaded", () => {

    let button = document.querySelector('button')

    button.addEventListener("click", event => {
        event.preventDefault()
        document.body.classList.toggle("darkMode")
    })
})