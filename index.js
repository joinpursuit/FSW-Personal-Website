const readMore = () => {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("readBtn");
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

 const topBtn = document.getElementById("topBtn");
 window.onscroll = function() {scrollFunction()};

 const scrollFunction = () => {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         topBtn.style.display = "block";
     }else {
         topBtn.style.display = "none"
     }
 }

 const topFunction = () => {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }

