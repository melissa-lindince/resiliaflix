const input = document.querySelector('.input-email')
const form = document.querySelector('.form')
const btn = document.querySelector('.btn')
const divSucess = document.querySelector('.div-sucess')

btn.addEventListener('click', (e) => {
   e.preventDefault()
   form.style.display = 'none';
   divSucess.style.display = 'flex';

})