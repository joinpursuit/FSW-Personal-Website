document.addEventListener('DOMContentLoaded', ()=>{
      let h1 = document.querySelector('h1')
      h1.addEventListener("mouseover", (e)=>{
          e.target.style.color= "green";
          h1.addEventListener("mouseover", (e)=>{
            e.target.style.color= "blue"; 
        })
      })
      const home = document.querySelector('home')
      home.addEventListener("click", (e)=>{
        home.textContent = e.target.change.visible;

        
      })
      function change(){
        let img = document.querySelector('img');
        if(img.src !== "images/alex.jpg"){
         img.src = "images/alex.jpg"
        }
      else{
        img.src = "https://i.imgur.com/4qMZueg.jpg"
       }
      }
     
     img.addEventListener("click", change())

     const aboutMe = document.getElementById('Aboutme')
    //  aboutMe.addEventListener('click', (e)=>{
    //    tre = e.target.tre
    //  })
      
})