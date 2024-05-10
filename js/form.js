const button = document.getElementById('loading')
const addLoading = () => {
    button.innerHTML = '<img src="img/loading-new.png" alt="" class="loading">'
}

const removeLoading = () => {
    button.innerHTML = 'Assinar'
    document.getElementById('form').style.display = 'none';
}

const sendEmail = () => {
    const formSpreeUrl = 'https://formspree.io/f/mkndykyn'; // Substitua pelo seu endereço de e-mail do Formspree

    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const numero = document.querySelector('input[name=numero]').value;

    const emailBody = `
        Nome: ${nome}
        Email: ${email}
        Número: ${numero}
    `;

    fetch(formSpreeUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: emailBody, // Corpo do e-mail
            _subject: 'Novo usuário cadastrado Newsletter', // Assunto do e-mail
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar o formulário');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Faça algo após o envio do formulário, se necessário
    })
    .catch(error => {
        console.error('Erro ao enviar o formulário:', error);
    });
}



const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();
    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const numero = document.querySelector('input[name=numero]').value;

    // Envia os dados para a API
    fetch('https://api.sheetmonkey.io/form/qu2GQ1m7qFKowz5H2Nk6TP', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ nome, email, numero }),
    }).then(() => {
        sendEmail();
    }).then(() => {
        removeLoading();
    })
}



document.querySelector('form').addEventListener('submit', handleSubmit)