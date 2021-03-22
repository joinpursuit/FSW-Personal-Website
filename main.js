document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'complete') {
      setTimeout(function(){
        document.getElementById('interactive');
  
  document.getElementById('load').style.visibility="hidden";
  },4000);
    }
  }

  const hidePhoto = () =>{
      const ul = document.querySelector(".photography-set")
      const li = document.querySelector(".photography-flex")
      if(ul.style.visibility === "visible"){
          ul.style.visibility = "hidden"
      }else{
          ul.style.visibility = "visible"
      }
  }