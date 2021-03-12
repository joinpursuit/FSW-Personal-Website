document.addEventListener('DOMContentLoaded', ()=>{
  // const h1 = document.querySelector('h1')
  // h1.addEventListener("mouseover", ()=>{
  //   if(h1.style.color !== "green"){
  //     h1.style.color = "green"
  //   }else{
  //     h1.style.color= "blue"
  //   }
  // })
      

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

  let skills = document.getElementById('skills2');
  const paraskills = document.getElementById('paraskills')
  const forms = document.createElement('div')
  forms.className = 'cardAll'
  skills.addEventListener('click', ()=>{
    if(skills.value === 'all'){
      forms.innerHTML = `<img src= "images/react js.png">,<img src= "images/css.png">,
      <img src= "images/html.png">,<img src= "images/node .png">,<img src= "images/postgresql.jpeg">, 
      <img src= "images/javascript.png">, <img src= "images/auditio.png">,<img src= "images/photoshow.png">,
      <img src="images/gif/premierpro.jpeg"> `
      paraskills.appendChild(forms)
    }else if(skills.value === 'front'){
      forms.innerHTML = `<img src= "images/react js.png">,<img src= "images/css.png">,
      <img src= "images/html.png">`
      paraskills.appendChild(forms)
    }else if(skills.value === 'back'){
      forms.innerHTML = `<img src= "images/node .png">,<img src= "images/postgresql.jpeg">, 
      <img src= "images/javascript.png">`
      paraskills.appendChild(forms)
    }else if(skills.value === 'others'){
      forms.innerHTML = `<img src= "images/auditio.png">,<img src= "images/photoshow.png">,
      <img src="images/gif/premierpro.jpeg">`
      paraskills.appendChild(forms)
    }else{
      skills.value = ''
    }
    });
    
})