function toggleTheme() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "colorTheme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}
if (localStorage.getItem("colorTheme") === "dark") {
    toggleTheme();
} else if (
    localStorage.getItem("colorTheme") !== "light" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    toggleTheme();
}

window.onscroll = function() {scrollFunction()};

const navbar = document.getElementById("header");

const sticky = header.offsetTop;
function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}

var menu = document.getElementById('menu');
    var closeIcon = document.getElementById("closeIcon");

    menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        closeIcon.checked = false;
      }
    }

    document.addEventListener('DOMContentLoaded', e =>{
      e.preventDefault
      const btn = document.getElementById('form5')
      btn.addEventListener('submit', eve => {
          eve.preventDefault()
      })
  })
