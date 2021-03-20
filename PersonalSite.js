console.log("Hello");

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

// Create a button that will change it to dark mode.

const darkMode = () => {
  const toDarkmode = document.body;
  const toChange = document.getElementById("toChange");
  toDarkmode.classList.toggle("dark-mode");
  if (toChange.innerText === "Light Mode") {
    toChange.innerText = "Dark Mode";
  } else {
    toChange.innerText = "Light Mode";
  }
};

// create an option the filters the backend, front and etc...

const data = [
  { name: "Front End", image: "HTML.png" },
  { name: "Front End", image: "CSS.png" },
  { name: "Front End", image: "JavaScript.png" },
  { name: "Backend", image: "Node JS.png" },
  { name: "Backend", image: "express.jpeg" },
  { name: "Backend", image: "Postgresql.png" },
  { name: "Backend", image: "React and Redux.png" },
  { name: "Other", image: "agile.png" },
  { name: "Other", image: "code reviews.jpeg" },
  { name: "Other", image: "pair programming.png" },
  { name: "Other", image: "sprint.png" },
  { name: "All", image: "HTML.png" },
  { name: "All", image: "CSS.png" },
  { name: "All", image: "JavaScript.png" },
  { name: "All", image: "Node JS.png" },
  { name: "All", image: "express.jpeg" },
  { name: "All", image: "Postgresql.png" },
  { name: "All", image: "React and Redux.png" },
  { name: "All", image: "agile.png" },
  { name: "All", image: "code reviews.jpeg" },
  { name: "All", image: "pair programming.png" },
  { name: "All", image: "sprint.png" },
];

const skills = ["Front End", "Backend", "Other", "All"];
const select = document.querySelector("select");
const container = document.querySelector(".Skills-Container");

const createOptions = () => {
  for (let i = 0; i < skills.length; i++) {
    const option = document.createElement("option");
    option.classList.add("skillsOptions")
    option.textContent = skills[i];
    option.value = skills[i];
    select.appendChild(option);
  }
};
createOptions();

const filterOption = (e) => {
  e.preventDefault();
  debugger
  const toTarget = e.target.value;
  container.innerText = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === toTarget) {
      let img = document.createElement("img");
      img.src = data[i].image;
      container.appendChild(img);
    }
  }
};
select.addEventListener("change", filterOption);
