let menu = document.querySelector("#hamburger-menu");//
let dropDown = document.querySelector("#drop-down");//
let homeLi = document.querySelector('#home-li')
let projectLi = document.querySelector('#projects-li')
let aboutLi = document.querySelector('#about-li')
let contactLi = document.querySelector('#contact-li')
let x = document.querySelector('#xb')


menu.addEventListener('mouseover', (event) => {
   dropDown.style.display = 'block' 
    })

//this event listener makes the dropdown menu disappear by using display none.
let xButton = document.querySelector('#xb')
   xButton.addEventListener('click', (event) => {
           dropDown.style.display = 'none' 
          
    })
   
    let makeRain = document.getElementById("no-matrix");
    let makeRainButton = document.getElementById("rain");
   
   makeRainButton.addEventListener('click', (event) => {
       makeRain.classList.toggle("matrix");
       if (makeRainButton.textContent === "dark mode") {
           makeRainButton.textContent = "matrix mode";
           let divOfPic = document.getElementById('pic')
           let switchPic = document.getElementById('matrix-pic')
           let plainPic = document.getElementById('plain-pic')
           divOfPic.removeChild(switchPic)
           plainPic.style.display = 'block'
       
        } else {
            makeRainButton.innerHTML = "dark mode";
            let matrixPic = document.createElement("IMG")
            matrixPic.id = 'matrix-pic';
            matrixPic.setAttribute("src", "matrix.png");
            // matrixPic.setAttribute("width", "919");
            // matrixPic.setAttribute("height", "1000");
            matrixPic.setAttribute("alt", "Farrah's Matric Pic");
            let divOfPic = document.getElementById('pic')
            divOfPic.appendChild(matrixPic);
            let plainPic = document.getElementById('plain-pic')
           plainPic.style.display = 'none' 
           
        }
 })
    

let watchButton = document.querySelector('#watch')
 watchButton.addEventListener('click', (event) => {
let cover = document.getElementById('snow-video-cover')
cover.style.display = 'none'

setTimeout(function () {
    cover.style.display = 'block'
        }, 15000);
  })
  



  let getJoke = document.getElementById('click-joke')
  getJoke.addEventListener('click',(event) =>{
 



     const getJokes = async () => {
        try {
            let res = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=twopart");
            let jokesText = res.data['setup']
            let answer = res.data['delivery']
            let jokeOutput = document.getElementById('joke-output') 
            jokeOutput.textContent = `${jokesText} 
            Answer: ${answer}`
            // objectName[“keyName”] = value        
            } catch(err) { console.log(err);  debugger;}                                                 
         }
         getJokes()
    })

    let menuButton = document.getElementById("menu-button")

    menuButton.addEventListener('click',(event)=>{
      
        let bigMenu = document.getElementById("big-menu")
        let bigHome = document.getElementById("big-home")
        let bigAbout = document.getElementById("big-about")
        let bigProjects = document.getElementById("big-projects")
        let bigContact = document.getElementById("big-contact")
        // bigMenu.style.visibility = 'visible'
        // menuButton.style.visibility = 'hidden'



        setTimeout(function () {
            bigHome.style.visibility = "visible"
          }, 200);
        setTimeout(function () {
            bigAbout.style.visibility = "visible"
          }, 400);
        setTimeout(function () {
           bigProjects.style.visibility = "visible"
          }, 600);
        setTimeout(function () {
            bigContact.style.visibility = "visible"
          }, 800);
      




        // setTimeout(function () {
        //     bigMenu.style.visibility = 'hidden'
        //     menuButton.style.visibility = 'visible'

        //         }, 4000);
        
    
    })




// let bigX = document.getElementById('big-x')
// bigX.addEventListener('click',(event)=>{
//     let bigMenu= document.querySelector("#big-menu")
// bigMenu.style.display = "none"  
// menuButton.style.visibility = 'visible'



// })



// document.addEventListener('DOMContentLoaded',(event)=>{
//     document.getElementById("name-big").classList.toggle('name-effect')


// })