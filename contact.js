document.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault()
    const name = document.getElementById('form1')
    const lastName = document.getElementById('form2')
    const email = document.getElementById('form3')
    const text = document.getElementById('form4')
    const button= document.getElementById('form5') 
    button.addEventListener('submit', e =>{
        e.preventDefault()
        const norm = document.getElementById('norm')
        let info = `${name.value} ${lastName.value} \n ${email.value} \n ${text.value}`
        norm.value= info
        sendEmail(name.value, lastName.value, email.value, text.value)
        
    } )
    
  
})


function sendEmail(name, lastName, email, text){
    Email.send({
        Host: "smpt.gmail.com",
        Username: 'alexander.larosa.perez@gmail.com',
        To: "alexander.larosa.perez@gmail.com",
        From:  "alexander.larosa.perez@gmail.com",
        Subject: `${name.value} sent you a msg`,
        Password: "dkelqhtqsquwjfvj",
        Body: `Name: ${name.value}  ${lastName.value}<br/> Email: ${email.value} 
        <br/> Message: ${text.value}`
    }).then((message)=> alert('mail send successfully'))
}
