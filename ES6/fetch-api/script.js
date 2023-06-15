document.querySelector('button#getText').addEventListener('click', getText);
document.querySelector('button#getJson').addEventListener('click', getJson);
document.querySelector('button#getApiData').addEventListener('click', getApiAsync);
document.querySelector('form#addPost').addEventListener('submit', addPost);

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

async function getApi() {
    let divOutput = document.querySelector('div#output');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((element) => {
            divOutput.innerHTML += `
            <ul>
                <li>${element.userId}</li>
                <li>${element.id}</li>
                <li>${element.title}</li>
                <li>${element.body}</li>
            </ul>`;
        });
    })
    .catch((err) => {console.log(err);});
}

// async ---------------------------------------

async function getApiAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    return response.json();
}

function addPost(e) {
    let divOutput = document.querySelector('div#output');
    e.preventDefault();
    let title = document.querySelector('input[type="text"]').value;
    let text = document.querySelector('textarea').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json' 
        },
        body:JSON.stringify({
            title: title,
            body: text
        })
    })
    .then((res) => res.json())
    .then((data) => {
        divOutput.innerHTML = `<ul>
        <li>${data.title}</li>
        <li>${data.body}</li>
        </ul>`;
        console.log(data);
    })
    .catch((err) => {console.log(err);});
}






    /** Mozila - https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Connection_management_in_HTTP_1.x
     * 
     * A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, 
     * tais como os pedidos e respostas. 
     * Ela também fornece o método global fetch() (en-US) que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
     * 
     */