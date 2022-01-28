const cep = document.querySelector('#cep')

const showResults = (results) => {
    for(campo in results) {
        if(document.querySelector('#'+campo)){
            document.querySelector('#'+campo).value = results[campo]
        }
    }
}

cep.addEventListener('blur', e=> {
    let search = cep.value.replace("-",'')
    const option = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, option)
    .then(res => {res.json()
    .then(data=> showResults(data))})
    .catch(e => console.log('Ocorreu um erro ' + e))
})