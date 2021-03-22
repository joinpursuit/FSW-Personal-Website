const willYouSleep = document.querySelector(".will-you-sleep-description");
const snowmanDescription = document.querySelector(".snowman-description");
const learnMoreBtn1 = document.querySelector("#learn-more-btn-1");
const learnMoreBtn2 = document.querySelector("#learn-more-btn-2");

learnMoreBtn1.addEventListener("click", (e) => {
//   e.preventDefault();
  if (willYouSleep.style.display === "none") {
    willYouSleep.style.display = "block";
  } else {
    willYouSleep.style.display = "none";
  }
});

learnMoreBtn2.addEventListener("click", (e) => {
    // e.preventDefault();
  if (snowmanDescription.style.display === "none") {
    snowmanDescription.style.display = "block";
  } else {
    snowmanDescription.style.display = "none";
  }
//   debugger;
});
