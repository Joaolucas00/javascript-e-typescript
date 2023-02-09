var horario = new Date()
var horaAtual = horario.getHours()
var spanHora = window.document.getElementById('hora')
var divImg = window.document.getElementById('img')
spanHora.innerHTML = horaAtual

if (horaAtual >= 12 && horaAtual < 19) {
    divImg.style.backgroundImage = 'var(--dia)'
} else if (horaAtual >= 19 || horaAtual < 6) {
    divImg.style.backgroundColor = 'black'
    divImg.style.backgroundImage = 'var(--noite)'

} else if (horaAtual >= 6 && horaAtual < 12) {
    divImg.style.backgroundImage = 'var(--manha)'
}

