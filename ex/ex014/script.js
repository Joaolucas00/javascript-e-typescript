var numeros = []
var txt_n1 = document.getElementById('inum')
var span_result = document.getElementById('result')
function addNum() {
    var numero = Number(txt_n1.value)
    var selec = document.getElementById('iselec')
    numeros.push(numero)
    var opt = document.createElement('option')
    opt.text = `Valor ${numero} adicionado`
    selec.appendChild(opt)
}

function analisarVetor() {
    var soma = 0
    for (let pos in numeros) {
        soma += numeros[pos]
        if (numeros[pos] == numeros[0]) {
            var maior = numeros[pos]
            var menor = numeros[pos]
        } else {
            if (maior < numeros[pos]) {
                maior = numeros[pos]
            } else{
                if (numeros[pos] < menor) {
                    menor = numeros[pos]
                }
            }
        }
    }

    var media = soma/numeros.length
    span_result.innerHTML += `Ao todo temos ${numeros.length} números cadastrados <br>`
    span_result.innerHTML += `O maior valor foi ${maior} <br>`
    span_result.innerHTML += `O menor valor foi ${menor} <br>`
    span_result.innerHTML += `A soma dos valores foi ${soma} <br>`
    span_result.innerHTML += `A média de todos os números foi ${media} <br>`

}
