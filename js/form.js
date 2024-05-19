const button = document.getElementById('loading')
const addLoading = () => {
    button.innerHTML = '<img src="img/loading-new.png" alt="" class="loading">'
}

const removeLoading = () => {
    button.innerHTML = 'Assinar'
    document.getElementById('form').style.display = 'none';
}

const emailSend = () => {
    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const numero = document.querySelector('input[name=numero]').value;
    fetch("https://formsubmit.co/ajax/contato@modelarartmoveis.com", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        subject: "Modelar Art - Landing Page",
        name: "Novo cliente cadastrado na Newsletter - Landing Page",
        message:  `Nome: ${nome}\nEmail: ${email}\nNúmero: ${numero}`
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
}

const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();
    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const numero = document.querySelector('input[name=numero]').value;

        fetch('https://api.sheetmonkey.io/form/qu2GQ1m7qFKowz5H2Nk6TP', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, numero }),
        }).then(() => {
           emailSend();
        })
        .then(() => {
            removeLoading();
        });
}

// Add event listener to the form
document.querySelector('form').addEventListener('submit', handleSubmit);



// document.querySelector('form').addEventListener('submit', handleSubmit)