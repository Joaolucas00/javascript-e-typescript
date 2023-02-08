var horario = new Date()
var horaatual = horario.getHours()

console.log(horaatual)


if (horaatual < 12) {
    console.log('Bom dia!')
} else if (horaatual > 12 && horaatual < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}