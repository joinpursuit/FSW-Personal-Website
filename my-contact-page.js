const yourName = document.querySelector("#your-name")
const email = document.querySelector("#email-address")
const message = document.querySelector("#message")
const form = document.querySelector("form")

form.addEventListener("submit", () => {
  yourName.value = ""
  email.value = ""
  message.value = ""
  
})
