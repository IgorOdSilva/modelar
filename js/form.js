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

    // Envia os dados para a API
    fetch('https://api.sheetmonkey.io/form/qu2GQ1m7qFKowz5H2Nk6TP', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, numero }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocorreu um erro ao enviar os dados para a API.');
        }
        // Se o envio para a API for bem-sucedido, envie o email
        return Email.send({
            Host: "smtp.gmail.com",
            Username: "igornutrietec2020@gmail.com", // Substitua com seu endereço de email
            Password: "210510igor", // Substitua com sua senha
            To: 'oliveiradasilvaigor74@gmail.com',
            From: "igornutrietec2020@gmail.com", // Substitua com seu endereço de email
            Subject: "Cliente Cadastrado - NewsLetter",
            Body: `Nome: ${nome}\nEmail: ${email}\nNúmero: ${numero}`,
        });
    })
    .then(() => {
        removeLoading();
    })
    .then((message) => {
        console.log("Resposta do servidor de email:", message);
        if (message === "OK" || message === undefined) {
            // Email enviado com sucesso
            console.log("Email enviado com sucesso!");
            removeLoading();
        } else {
            // Ocorreu um erro ao enviar o email
            console.error("Ocorreu um erro ao enviar o email:", message);
            // Lide com o erro aqui
        }
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
        // Lide com o erro aqui
    });
}



document.querySelector('form').addEventListener('submit', handleSubmit)