// localStorage.clear();
const smallMenu = () => {
    let x = document.querySelector("#navLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

const toggleSwitch = document.querySelector('.toggle-switch');
const currentTheme = localStorage.getItem('theme');
const currentToggle = localStorage.getItem('toggle');
if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
  toggleSwitch.checked = true;
}
toggleSwitch.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  let theme = "light";
  let toggle = 'unchecked';
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
    toggle = 'checked';
  }
  localStorage.setItem("theme", theme);
  localStorage.setItem("toggle", toggle);
});

// code up a functioning form
// expanded details about project
// project picture at expand out readme file a link to github

// possible implementaion of an API
// constants overall activity for commits to github for display
// on projects page
