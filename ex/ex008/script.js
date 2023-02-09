function verificarIdade() {   
    var time = new Date()
    var anoAtual = 2023
    var anoPessoa = window.document.getElementsByName('ano')[0]
    var anoIdade = Number(anoPessoa.value)
    var divImg = window.document.getElementById('img')
    var idade = anoAtual - anoIdade
    var txt = document.getElementById('result')
    var sex = document.getElementsByName('sexo')
        if (idade < 15) {
            divImg.style.display = 'block'
            divImg.style.backgroundImage = 'var(--crianca)'
            txt.innerHTML = `Indentificamos uma criança com ${idade} anos!`

            
    if(sex[0].checked) {
        txt.innerHTML += `E é masculino.`
    } else {
        txt.innerHTML += `E é feminino.`
    }



        } else if (idade >= 15 && idade < 50 ) {
            divImg.style.display = 'block'
            divImg.style.backgroundImage = 'var(--jovem)'
            txt.innerHTML = `Indentificamos um jovem com ${idade} anos!`

            
    if(sex[0].checked) {
        txt.innerHTML += `E é masculino.`
    } else {
        txt.innerHTML += `E é feminino.`
    }




        } else {
            divImg.style.display = 'block'
            divImg.style.backgroundImage = 'var(--idoso)'
            txt.innerHTML = `Indentificamos um idoso com ${idade} anos!`

            
    if(sex[0].checked) {
        txt.innerHTML += `E é masculino.`
    } else {
        txt.innerHTML += `E é feminino.`
    }



        }
    } 


