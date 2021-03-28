const textAdventure = () => {
  const showButton = document.getElementById("show-text");
  const showTextAdventure = document.getElementById("text-adventure");
  if (showTextAdventure.style.display === "block") {
    showTextAdventure.style.display = "none";
    showButton.innerText = "Show more";
  } else {
    showTextAdventure.style.display = "block";
    showButton.innerText = "Hide";
  }
};
const snowman = () => {
  const snowmanButton = document.getElementById("showBtn");
  const showSnowman = document.getElementById("Snowman-text");
  if (showSnowman.style.display === "block") {
    showSnowman.style.display = "none";
    snowmanButton.innerText = "Show more";
  } else {
    showSnowman.style.display = "block";
    snowmanButton.innerText = "Hide";
  }
};

const button = document.querySelector("#toDarkMode");
const mode = localStorage.getItem("mode");
const body = document.body;
// debugger;
if (mode !== null) {
  body.classList.add(mode);
}
button.addEventListener("click", (e) =>{
    body.classList.toggle("dark-mode");
    if(button === "Dark Mode"){
        localStorage.setItem("mode", "dark-mode")
        
    } else {
        localStorage.setItem ("mode", "body")
    }
    if(button.textContent === "Dark Mode"){
        button.textContent = "Light Mode"
    }else{
        button.textContent = "Dark Mode"
    }
})
