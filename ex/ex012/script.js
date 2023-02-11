let numeros = [2, 7, 8, 3, 4]

console.log(numeros.length)
numeros.push('oLÁ')
console.log(numeros)
console.log(numeros.length)

numeros[5] = null
numeros.sort()
console.log(numeros)

for (let posicao in numeros) {
    console.log(numeros[posicao])
}

/*
let pessoa = [['Juan', 19], ['João', 18], ['Pedro', 20]]
for (cc = 0; cc <= 2; cc++) {
    console.log(`Pessoa ${cc}: `)
    for (c = 0; c <= 1; c++) {
        console.log(`${pessoa[cc][c]}`)
    }
}
*/
