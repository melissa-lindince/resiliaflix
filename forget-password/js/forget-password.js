var btnSubmit = document.querySelector(".btn-submit")
var inputEmail = document.querySelector(".input-email")
var msgErr= document.querySelector(".msg-err")
var form= document.querySelector(".div-email")
var divSucess = document.querySelector(".div-sucess")
btnSubmit.addEventListener("click", function() { 
   if (!inputEmail.value){
    msgErr.innerHTML = "Insira um e-mail válido" 
       setInterval(() => {
        msgErr.innerHTML = " "
       }, 2000);
})

