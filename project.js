//text based game
const div = document.getElementById("text-based-game");
const textGameImage = document.querySelector("#text-game");
const button = document.querySelector("button");
const p = document.getElementById("intro");
div.addEventListener("click", (event) => {
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
});

//snowman game
const game = document.getElementById("snowman-game");
const snowmanGameImage = document.querySelector("#snowman");
const btn = document.querySelector("words-btn");
const ptag = document.getElementById("introduction");
game.addEventListener("click", (event) => {
  if (ptag.style.display === "none") {
    ptag.style.display = "block";
  } else {
    ptag.style.display = "none";
  }
});
