// Loading the DOM 

document.addEventListener('DOMContentLoaded', (eve) => {
    eve.preventDefault()

let linkSnowman = document.getElementById('linkSnowman')
linkSnowman.addEventListener('click',()=>{
    let location = linkSnowman.getAttribute('href');
    window.open(location, '_blank');
})

let linkTrader = document.getElementById('linkTrader')
linkTrader.addEventListener('click',()=>{
    let location = linkTrader.getAttribute('href');
    window.open(location, '_blank');
})

})