const form = (address) =>{
   document.getElementById('road').value = address.lougradouro;
   document.getElementById('district').value = address.bairro;
   document.getElementById('city').value = address.cidade;
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