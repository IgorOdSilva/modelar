const button = document.getElementById('loading')
const addLoading = () => {
    button.innerHTML = '<img src="img/loading-new.png" alt="" class="loading">'
}

const removeLoading = () => {
    button.innerHTML = 'Assinar'
    document.getElementById('form').style.display = 'none';
}

const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();
    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const numero = document.querySelector('input[name=numero]').value;
    const apiKey = '20612e8d-2f51-4c07-a735-c37d8cc11f37'

    // Envia os dados para a API
    fetch('https://api.sheetmonkey.io/form/qu2GQ1m7qFKowz5H2Nk6TP', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ nome, email, numero }),
    }).then(() => {
        removeLoading();
    })
}



document.querySelector('form').addEventListener('submit', handleSubmit)