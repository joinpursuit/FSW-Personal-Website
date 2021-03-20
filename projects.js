const codepenDescription = document.querySelector("#codepen-description");
const snowmanDescription = document.querySelector("#snowman-description");
const learnMoreBtn1 = document.querySelector("#learn-more-btn-1");
const learnMoreBtn2 = document.querySelector("#learn-more-btn-2");

learnMoreBtn1.addEventListener("click", (e) => {
    if (codepenDescription.style.display === "none") {
        codepenDescription.style.display = "block"
    } else {
        codepenDescription.style.display = "none"
    }
  });

  learnMoreBtn2.addEventListener("click", (e) => {
    if (snowmanDescription.style.display === "none") {
        snowmanDescription.style.display = "block"
    } else {
        snowmanDescription.style.display = "none"
    }
  });
  