console.log("Hello");

const textAdventure = () => {
  const showButton = document.getElementById("show");
  const showTextAdventure = document.getElementById("text-adventure");
  if (showTextAdventure.style.display === "block") {
    showTextAdventure.style.display = "none";
    showButton.innerText = "Hide";
  } else {
    showTextAdventure.style.display = "block";
    showButton.innerText = "Show more";
  }
};
const snowman = () => {
  const snowmanButton = document.getElementById("showBtn");
  const showSnowman = document.getElementById("Snowman-text");
  if (showSnowman.style.display === "block") {
    showSnowman.style.display = "none";
    snowmanButton.innerText = "Hide";
  } else {
    showSnowman.style.display = "block";
    snowmanButton.innerText = "Show more";
  }
};
