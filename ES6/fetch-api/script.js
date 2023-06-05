document.querySelector('button#getText').addEventListener('click', getText);
document.querySelector('button#getJson').addEventListener('click', getJson);
function getText() {
    let divOutput = document.querySelector('div#output');

    fetch('sample-txt.txt')
    .then((res) => {
        return res.text();
    })
    .then((data) => {
        divOutput.innerHTML = data;
        console.log(data);
    }).catch((err) => {
        divOutput.innerHTML = "<p>Oops! Algum erro foi desparado!</p>";
        console.log('Oops! Erro: ' + err);
    });
}

function getJson() {
    let divOutput = document.querySelector('div#output');
    fetch('users.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.users.length; i++) {
            let li = document.createElement('li');
            console.log(data.users[i].name);
            li.textContent = `ID: ${data.users[i].id} | NOME: ${data.users[i].name} | EMAIL: ${data.users[i].email}`;
            divOutput.appendChild(li);
            console.log(divOutput);
        }
        console.log(data);
    })
    .catch((err) => {console.log(err);})
    
}










    /** Mozila - https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Connection_management_in_HTTP_1.x
     * 
     * A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, 
     * tais como os pedidos e respostas. 
     * Ela também fornece o método global fetch() (en-US) que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
     * 
     */