document.addEventListener('DOMContentLoaded', ()=>{
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