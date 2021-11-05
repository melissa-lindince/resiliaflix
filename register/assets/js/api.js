const form = (address) =>{
   console.log(address)
   document.getElementById('road').value = address.logradouro;
   document.getElementById('district').value = address.bairro;
   document.getElementById('city').value = address.localidade;
   document.getElementById('state').value = address.uf;
}

const searchCep = async () => {
 
   const cep = document.getElementById('cep').value;
   const url = `http://viacep.com.br/ws/${cep}/json/`;
   const data = await fetch(url)   
   const address = await data.json()
   form (address) 

}

   document.getElementById('cep')
      .addEventListener('focusout', searchCep);