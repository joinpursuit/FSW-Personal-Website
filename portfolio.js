
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
