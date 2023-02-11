function gerarTabuada() {
    var txt_tabuada = document.getElementById('inum')
    var select_tabuada = document.getElementById('itab')

    for (var cc = 1; cc <= 10; cc++) {
        var tabuada = Number(txt_tabuada.value)
        var option = document.createElement('option')
        option.text = `${tabuada} x ${cc} = ${cc * tabuada}`
        select_tabuada.appendChild(option)
    }
}
