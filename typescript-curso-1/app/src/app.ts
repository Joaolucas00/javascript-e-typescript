import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        controller.adicionar();
    });
} else {
    throw Error("Não foi possível inicializar a aplicação. Verefique se form existe.");
}

const botaoImporta = document.querySelector('#botao-importa')

if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importarDados();
    })
} else {
    throw Error("Botao não existe");
}