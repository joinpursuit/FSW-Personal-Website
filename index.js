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

allArt();
