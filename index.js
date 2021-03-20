//Contact Form
const resultsList = document.getElementById("results");
new URLSearchParams(window.location.search).forEach((name1, name2) => {
  resultsList.append(`${name1}: ${name2}:`);
  resultsList.append(document.createElement("br"));
});
