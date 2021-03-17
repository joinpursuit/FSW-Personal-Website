document.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault()
    const name = document.getElementById('form1')
    console.log(name)
    const lastName = document.getElementById('form2')
    console.log(lastName)
    
    const email = document.getElementById('form3')
    console.log(email)
    
    const text = document.getElementById('form4')
    console.log(text)
    
    const button= document.getElementById('form5') 
    button.addEventListener('click', e =>{
        e.preventDefault()
        const norm = document.getElementById('norm')
        let info = `${name.value} ${lastName.value} \n ${email.value} \n ${text.value}`
        console.log(info)
        norm.value= info
        

    } )
  
})

