const aboutMe = document.querySelector("about-me-section")
const aboutMeHeader = document.querySelector("#about-me-header")
const projects = document.querySelector("#projects-section")
const projectsHeader = document.querySelector("#projects-header")
const adventureVideo = document.querySelector("#adventure-video")
const snowmanVideo = document.querySelector("#snowman-video")
const clickHereSnowman = document.querySelector("#click-here-snowman")
const clickHereAdventure = document.querySelector("#click-here-adventure")


clickHereSnowman.addEventListener("click", () => {
  clickHereSnowman.style.display = "none";
    snowmanVideo.play();
    clickHereSnowman.style.display = "inline block";
    // snowmanVideo.pause();
    snowmanVideo.currentTime = 0;
    // snowmanVideo.style.classList.add("blurEffect");
 })

// snowmanVideo.addEventListener("click", (e) => {
//   e.target.play()
//  })
clickHereAdventure.addEventListener("click", () => {
  clickHereAdventure.style.display = "none";
    adventureVideo.play();
    clickHereAdventure.style.display = "inline block";
    // snowmanVideo.pause();
    snowmanVideo.currentTime = 0;
    // snowmanVideo.style.classList.add("blurEffect");
 })


//  function send() {
//   setTimeout(function() {
//     window.open("mailto:" + document.getElementById('email').value + "?subject=" + document.getElementById('subject').value + "&body=" + document.getElementById('message').value);
//   }, 320);
// }