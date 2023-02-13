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
    span_result.innerHTML = numeros
}

function analisarVetor() {
    for (let pos in numeros) {
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

    span_result.innerHTML += `Ao todo temos ${numeros.length} números cadastrados <br>`
    span_result.innerHTML += `O maior valor foi ${maior} <br>`
    span_result.innerHTML += `O menor valor foi ${menor} <br>`
    span_result.innerHTML += ``
}
