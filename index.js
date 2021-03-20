// Couldn't have done it without the help of Joshua Mendez

let aboutMe = document.querySelector("#aboutMe")
let projects = document.querySelector("#projects")
let skills = document.querySelector("#skills")
let contact = document.querySelector("#contact")
let resume = document.querySelector("#resume")
let aboutMeClass = document.querySelector(".aboutMe")
let projectsClass = document.querySelector(".projects")
let skillsClass = document.querySelector(".skills")
let contactClass = document.querySelector(".contact")
let resumeClass = document.querySelector(".resume")

aboutMe.addEventListener("click", () => {
  aboutMeClass.style.display = "inline";
  projectsClass.style.display = "none";
  skillsClass.style.display = "none";
  contactClass.style.display = "none";
  resumeClass.style.display = "none";
})

projects.addEventListener("click", () => {
  aboutMeClass.style.display = "none";
  projectsClass.style.display = "inline";
  skillsClass.style.display = "none";
  contactClass.style.display = "none";
  resumeClass.style.display = "none";
})

skills.addEventListener("click", () => {
  aboutMeClass.style.display = "none";
  projectsClass.style.display = "none";
  skillsClass.style.display = "inline";
  contactClass.style.display = "none";
  resumeClass.style.display = "none";
})

contact.addEventListener("click", () => {
  aboutMeClass.style.display = "none";
  projectsClass.style.display = "none";
  skillsClass.style.display = "none";
  contactClass.style.display = "inline";
  resumeClass.style.display = "none";
})

resume.addEventListener("click", () => {
  aboutMeClass.style.display = "none";
  projectsClass.style.display = "none";
  skillsClass.style.display = "none";
  contactClass.style.display = "none";
  resumeClass.style.display = "inline";
})

/* Source: http://thatmikeflynn.com/egg.js/ */
var egg = new Egg();
egg.addCode("b, i, n, x", function() {
  jQuery('#binx').fadeIn(500, function() {
    window.setTimeout(function() { jQuery('#binx').hide(); }, 5000);
  });
}, "binx-code");
egg.addHook(function(){
  console.log("Hook called for: " + this.activeEgg.keys);
  console.log(this.activeEgg.metadata);
});
egg.listen();
/* End Source */