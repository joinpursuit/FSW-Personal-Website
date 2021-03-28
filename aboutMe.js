const button = document.querySelector("#toDarkMode")
const mode  = localStorage.getItem('mode');
const body = document.body
if(mode !== null){
    body.classList.add(mode)
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











// const darkMode = () => {
//     const toDarkmode = document.body;
//     const toChange = document.querySelector(".toChange");
    // toDarkmode.classList.toggle("dark-mode");
//     if (toChange.innerText === "Light Mode") {
//       toChange.innerText = "Dark Mode";
//     } else {
//       toChange.innerText = "Light Mode";
//     }
//   };

// darkMode()