document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "complete") {
    setTimeout(function () {
      document.querySelector("#interactive");

      document.querySelector("#load").style.visibility = "hidden";
    }, 4000);
  }
};

const hidePhoto = () => {
  const ul = document.querySelector(".photography-set");
  const li = document.querySelector(".photography-flex");
  if (ul.style.visibility === "visible") {
    ul.style.visibility = "hidden";
  } else {
    ul.style.visibility = "visible";
  }
};
document.querySelector("#hidepics").addEventListener("click", hidePhoto);