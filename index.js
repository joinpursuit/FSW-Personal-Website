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
    const button=document.querySelector("#dark-btn")
    body.classList.toggle("darkMode")
    
    if(button.textContent ==="Dark Mode"){
        button.textContent = "Light Mode"
    } else {
        button.textContent="Dark Mode"
    }

}

const showButton=document.querySelector("#show")

showButton.onclick = () => { 
    document.querySelector("#meme-image").style.display = "block"; 
};