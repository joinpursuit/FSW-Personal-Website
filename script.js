document.addEventListener('DOMContentLoaded', (eve) => {
document.querySelectorAll('.nav').forEach((spaner) =>{
  spaner.addEventListener('click', (evn) => {
    document.querySelectorAll(".section").forEach((section) => {
      if(section.id.includes(spaner.getAttribute('href'))){
        window.open(`#${spaner.getAttribute('href')}`, '_self')
      }
    })
  })
})
})