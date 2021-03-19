let cssButton = document.querySelector("#css-change");

const themeChange = () => {
    let theme = document.querySelector("#test1")
    
    if (theme.getAttribute('href') === 'light.css') { 
        theme.setAttribute('href', 'dark.css'); 
        cssButton.textContent = "Dark Mode"
    } else { 
        theme.setAttribute('href', 'light.css');
        cssButton.textContent = "light Mode" 
    }

}

cssButton.addEventListener("click", themeChange)


