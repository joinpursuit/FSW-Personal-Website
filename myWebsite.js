const navBar = document.querySelector(".main-nav");
const nav = document.querySelector(".nav-bar");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-bar li");


const naviBar = () => {

    burger.addEventListener("click", (e) => {
        //Toggle the burger Nav
        
        nav.classList.toggle("nav-active");
        //Animation for Links in Nav 
        navLinks.forEach((link, i) => {
            if(link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade .5s ease forwards ${i / 6 + .3}s`
            }
        });
        //Burger X animation
        burger.classList.toggle("toggle");
    })
    
    
}

naviBar();

window.addEventListener("scroll", () => {
   if (window.scrollY > 0) {
    navBar.classList.add("scrolling-active"); 
   } else {
    navBar.classList.remove("scrolling-active");
    }
}) 
    
