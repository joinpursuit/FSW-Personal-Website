
const logo = document.querySelector(".logo")
logo.addEventListener('click', function(){
    logo.classList.add('animated', 'heartBeat')
    
})
let audio = document.querySelector("#audio")
const spans = document.querySelectorAll("h1 span") 
spans.forEach(span => span.addEventListener('mouseover', function(e){
    span.classList.add('animated', 'flash')
    audio.play()
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'flash')
    audio.pause()
}))



const video = document.querySelector("video");
video.style.visibility = "hidden"
const button1 = document.querySelector("#project1");
const videoText = document.querySelector("#video-text")
const git1 = document.querySelector(".video a")
git1.style.visibility = "hidden"
videoText.style.visibility = "hidden"
button1.addEventListener("click", (event) => {
    if(video.style.visibility === "hidden"){
        video.style.visibility = "visible"
        videoText.style.visibility = "visible"
        git1.style.visibility = "visible"
    }
    else{
        video.style.visibility = "hidden"
        videoText.style.visibility = "hidden"
        git1.style.visibility = "hidden"
    }
})

const video2 = document.querySelector(".video2");
video2.style.visibility = "hidden"
const button2 = document.querySelector("#project2");
const videoText2 = document.querySelector("#video-text2")
const git2 = document.querySelector(".video2 a")
git2.style.visibility = "hidden"
videoText2.style.visibility = "hidden"
button2.addEventListener("click", (event) => {
    if(video2.style.visibility === "hidden"){
        video2.style.visibility = "visible"
        videoText2.style.visibility = "visible"
        git2.style.visibility = "visible"
    }
    else{
        video2.style.visibility = "hidden"
        videoText2.style.visibility = "hidden"
        git2.style.visibility = "hidden"
    }
})

const video3 = document.querySelector(".video3");
video3.style.visibility = "hidden"
const button3 = document.querySelector("#project3");
const videoText3 = document.querySelector("#video-text3")
const git3 = document.querySelector(".video3 a")
git3.style.visibility = "hidden"
videoText3.style.visibility = "hidden"
button3.addEventListener("click", (event) => {
    if(video3.style.visibility === "hidden"){
        video3.style.visibility = "visible"
        videoText3.style.visibility = "visible"
        git3.style.visibility = "visible"
    }
    else{
        video3.style.visibility = "hidden"
        videoText3.style.visibility = "hidden"
        git3.style.visibility = "hidden"
    }
})

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the navbar
// const navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
// const sticky = navbar.offsetHeight;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// myFunction()
// const header = document.querySelector("header");
// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("header").style.top = "0"
//   } else {
//     document.querySelector("header").style.top = "-50px"
//   }
//   prevScrollpos = currentScrollPos;
// }

// window.addEventListener("scroll", bringmenu);

// function bringmenu() {
//     if (document.body.scrollBottom > 0 || document.documentElement.scrollBottom > 0) {
//         navbar.style.bottom = "-50%";
//     } else {
//         navbar.style.bottom = "0";
//     }
// }

// var prevScrollpos = window.pageYOffset;

// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     navbar.style.top = "0";
//   } else {
//     navbar.style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// const navBarSticky = document.querySelector(".navbar")
// debugger;
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     navBarSticky.style.top = "0";
//   } else {
//     navBarSticky.style.top = "-50px";
//   }
// }

// oneJokeDiv.addEventListener("click", (event) => {
//     if(punchP.style.visibility === 'hidden'){
//         punchP.style.visibility = "visible";
//         oneJokeDiv.style.height = "120px";
//     }else {
//         punchP.style.visibility = "hidden";
//         oneJokeDiv.style.height = "100px";
//     }
// });


// const htmlBar = document.querySelector('.bar-html')
// const cssBar = document.querySelector('.bar-css')
// const javaBar = document.querySelector('.bar-javascript')


// var t1 = new TimelineLite()

// t1.fromTo(htmlBar, .75, {width:'calc(0% - 6px'}, {width: 'calc(90% - 6px)', ease: Power4.easeout})

// const controller = new ScrollMagic.Controller()
// const scene = new ScrollMagic.Scene({
//     triggerElement: '.skills',
//     triggerHook: 0
// })

// .setTween(t1)
// .addTo(controller)

// const showRequiredCategory = event => {
//     const getId = event.getId
//     const links = document.querySelectorAll('work-category button')
//     for(let i = 0; i < links.length; i++) {
//         if(links[i].hasAttribute('class')){
//             links[i].classList.remove('active')
//         }
//     }

//     event.classList.add('active')
//     const getCategory = document.querySelector(".category-${getId}")
//     const categories = document.querySelectorAll(`div[class ^= "category-"]`)
//     for(let i = 0; i < categories.length; i++) {
//         if(categories[i].hasAttribute('class')){
//             categories[i].classList.remove('showCategory')
//             categories[i].classList.add('hideCategory')
//         }
//     }

//     getCategory.classList.remove("hideCategory")
//     getCategory.classList.remove("showCategory")
// }


// function Scroll()
// {
//     const header = document.querySelector("header");
//     let timeOut;
//     let displayNone = header.style.display = "none"
//     if (window.pageYOffset < 1)
//         {
//             clearTimeout(timeOut);
//         }
//     if (window.pageYOffset > 1) 
//         {
//             timeOut = setTimeout(function(){displayNone}, 2000);
//             navbar.style.opacity = "0";
//         } else {
//             header.style.display = "block";
//             header.style.opacity = "1";
//             stopcount();
//         }
// }

// window.addEventListener("scroll",Scroll);
