//Contact Form
const resultsList = document.getElementById("results");
new URLSearchParams(window.location.search).forEach((name1, name2) => {
  resultsList.append(`${name1}: ${name2}:`);
  resultsList.append(document.createElement("br"));
});

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
