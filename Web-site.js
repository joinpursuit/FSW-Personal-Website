document.addEventListener('DOMContentLoaded', ()=>{
      let h1 = document.querySelector('h1')
      h1.addEventListener("mouseover", (e)=>{
          e.target.style.color= "green";
          h1.addEventListener("mouseover", (e)=>{
            e.target.style.color= "blue"; 
        })
      })
      
     const tre = document.querySelector('tre')
     const aboutMe = document.getElementById('Aboutme')
    //  aboutMe.addEventListener('click', (e)=>{
    //    tre = e.target.tre
    //  })
})