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
];
const skills = ["Front End", "Backend", "Other", "All"]
const select = document.querySelector("select");
const container = document.querySelector(".Skills-Container");

const createOptions = () => {
  for (let i = 0; i <= skills.length; i++) {
    const option = document.createElement("option");
    // debugger
    option.textContent = skills[i];
    select.appendChild(option);
  }
};
createOptions();



const filterOption = () => {
  // let skills = select.value;
  container.innerText = "";
  for (let i = 0; i < data.length; i++) {
    // if(skills = data[i].name){
    //   const img = document.createElement("img")
    //   img.src = data[i].image
    //   container.appendChild(img);
    // }
    if (data[i].name === "Front End") {
      const frontEnd = document.createElement("img");
      frontEnd.src = data[i].image;
      container.appendChild(frontEnd);
    // } else if (data[i].name === "Backend") {
    //   const backEnd = document.createElement("img");
    //   backEnd.src = data[i].image;
    //   container.appendChild(backEnd);
    // } else if (data[i].name === "Other") {
    //   const all = document.createElement("img");
    //   all.src = data[i].image;
    //   container.appendChild(all);
    }
  }
};

select.addEventListener("click", filterOption);
