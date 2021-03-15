document.addEventListener('DOMContentLoaded', ()=>{
  const h1 = document.querySelector('h1')
  h1.addEventListener("mouseover", ()=>{
    if(h1.style.color !== "green"){
      h1.style.color = "green"
    }else{
      h1.style.color= "blue"
    }
  })
      

  function change(){
    let img = document.querySelector('#img');
      if(img.src !== "https://i.imgur.com/8Ba9n5K.jpg"){
        img.src = "https://i.imgur.com/8Ba9n5K.jpg"
      }else{
      img.src = "https://i.imgur.com/4qMZueg.jpg"
      }
  }
  img.addEventListener("mouseover", ()=>{change()})



  // let bullet = document.getElementById('bullet')
  // bullet.addEventListener("click", (e)=>{
  //   if(e.document.style.background !== "green"){
  //     e.document.style.background = "green"
  //   }else{
  //     e.document.style.background = "red"
  //   }
  // })

  
})