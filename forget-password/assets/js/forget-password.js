const input = document.querySelector('#email')
const form = document.querySelector('.form')
const btn = document.querySelector('.btn')
const divSucess = document.querySelector('.div-sucess')
const errorLabel = document.querySelector("#error")

btn.addEventListener('click', (e) => {
   e.preventDefault()
   if (!validateEmail(input.value)) {
      errorLabel.innerText = "Email invalido";
      errorLabel.classList.remove("hidden");
      return
   }

   form.style.display = 'none';
   divSucess.style.display = 'flex';
})

function validateEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}