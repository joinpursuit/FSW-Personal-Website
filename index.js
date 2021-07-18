const ul = document.querySelector("#art-ul");
let num = 0;
const allArt = async () => {
  try {
    const randNum = Math.floor(Math.random() * 1591);
    const res = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=hasImages`
    );
    const artData = res.data.objectIDs[randNum];
    num = artData;

    console.log(artData);
  } catch (err) {
    console.log(err);
  }
  try {
    const artPiece = await axios.get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${num}`
    );
    const art = artPiece.data;
    console.log(artPiece.data);
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = artPiece.data.primaryImageSmall;
    console.log(artPiece.data.primaryImageSmall);
    li.appendChild(img);
    ul.appendChild(li);
  } catch (err) {
    console.log(err);
  }
};

const themeToggle = document.getElementById("theme-change");
const themeStylesheet = document.getElementById("theme");

themeToggle.addEventListener("click", () => {
  if (themeStylesheet.href.includes("dark")) {
    themeStylesheet.href = "./website.css";
    themeToggle.innerText = "Switch to dark mode";
  } else {
    themeStylesheet.href = "./dark-mode.css";
    themeToggle.innerText = "Switch to light mode";
  }
});

allArt();
