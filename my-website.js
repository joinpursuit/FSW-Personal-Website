const projects = document.querySelector("#projects-section");
const projectsHeader = document.querySelector("#projects-header");
const adventureVideo = document.querySelector("#adventure-video");
const snowmanVideo = document.querySelector("#snowman-video");
const clickHereSnowman = document.querySelector("#click-here-snowman");
const clickHereAdventure = document.querySelector("#click-here-adventure");
const descriptionAdventure = document.querySelector("#descriptionAdventure");
const descriptionSnowman = document.querySelector("#descriptionSnowman");
const buttonSnowman = document.querySelector("#btn-snowman");
const buttonAdventure = document.querySelector("#btn-adventure");

clickHereSnowman.addEventListener("click", () => {
  clickHereSnowman.style.display = "none";
  snowmanVideo.play();
  clickHereSnowman.style.display = "inline block";
});

clickHereAdventure.addEventListener("click", () => {
  clickHereAdventure.style.display = "none";
  adventureVideo.play();
  clickHereAdventure.style.display = "inline block";
});

buttonSnowman.addEventListener("click", () => {
  if (descriptionSnowman.style.display === "block") {
    descriptionSnowman.style.display = "none";
    buttonSnowman.textContent = `Show description`;
  } else {
    descriptionSnowman.style.display = "block";
    buttonSnowman.textContent = `Show less`;
  }
});

buttonAdventure.addEventListener("click", () => {
  if (descriptionAdventure.style.display === "block") {
    buttonAdventure.textContent = `Show description`;
    descriptionAdventure.style.display = "none";
  } else {
    descriptionAdventure.style.display = "block";
    buttonAdventure.textContent = `Show less`;
  }
});
