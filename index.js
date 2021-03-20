window.onscroll = function() {stickyNavbar()};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;


const stickyNavbar = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

