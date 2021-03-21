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
      const ul = document.getElementsByClassName("photography-set")
      const li = document.getElementsByClassName("photography-flex")
      if(ul.style.display === "block"){
          ul.style.display = "none"
      }else{
          ul.style.display = "block"
      }
  }