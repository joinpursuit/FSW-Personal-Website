const mobileMenuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector(".menu");

mobileMenuBtn.addEventListener("click", (e) => {
    // loop thru each li and add classlist, remove current class and add class that displays the links
    if(mobileMenu.style.display ==="block"){
        mobileMenu.style.display="none"
        mobileMenuBtn.innerHTML="Menu"
    }else{
        mobileMenu.style.display = "block"
        mobileMenu.style.height="100%"
        mobileMenuBtn.innerHTML="Close"
    }

})

const darkMode = () =>{
    const body= document.querySelector("body")
    const button=document.querySelector("#dark-mode")
    body.classList.toggle("darkMode")
    if(button.innerText === "Dark Mode"){
        button.innerText = "Light Mode"
    } else {
        button.innerText="Dark Mode"
    }

}