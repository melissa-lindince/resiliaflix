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
<<<<<<< HEAD
   }
=======

 } else if (inputEmail.value){
    form.style.display= "none"
    btnSubmit.style.display= "none"
    divSucess.style.display= "flex"
    
 }
})
     
   }

>>>>>>> 895f91df0b21401d0d0bf66d04f2416527dc20b9
})

