// used a lot of googling to figure out how to use the localStorage to save it and joshua helped me perfect the code"
const myStorage = window.localStorage;
let theme = document.querySelector("#style");
let cssButton = document.querySelector("#css-change");
if (myStorage.length === 0) {
  theme.setAttribute("href", "light.css");
  cssButton.textContent = "Click for dark mode";
  myStorage.setItem("current theme", theme.getAttribute("href"));
  myStorage.setItem("buttonContent", cssButton.textContent);
}
let lastKnownTheme = myStorage.getItem("current theme");
let lastKnownButton = myStorage.getItem("buttonContent");
theme.setAttribute("href", lastKnownTheme);
cssButton.textContent = lastKnownButton;
const themeChange = () => {
  if (theme.getAttribute("href") === "dark.css") {
    theme.setAttribute("href", "light.css");
    cssButton.textContent = "Click for dark mode";
  } else {
    theme.setAttribute("href", "dark.css");
    cssButton.textContent = "click for light mode";
  }
  myStorage.setItem("current theme", theme.getAttribute("href"));
  myStorage.setItem("buttonContent", cssButton.textContent);
};
cssButton.addEventListener("click", themeChange);
