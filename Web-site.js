document.addEventListener('DOMContentLoaded', ()=>{
      let h1 = document.querySelector('h1')
      h1.addEventListener("mouseover", (e)=>{
          e.target.style.color= "green";
          h1.addEventListener("mouseover", (e)=>{
            e.target.style.color= "blue"; 
        })
      })
      let div = document.querySelector('home')
     img.addEventListener('click',(e)=>{
       
     })
     
})