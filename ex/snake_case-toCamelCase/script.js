function snakeCasetoCamelCase (nome) {
    if (nome.includes("_") || nome.includes("-")) {
        let array = []
        for (let n = 0; n < nome.length; n++) {
            array.push(nome[n])
        }
        for (let v = 0; v < array.length; v++) {
            if (array[v] == "_" || array[v] == "-") {
                array.splice(array.indexOf(array[v]), 1)
                array[v] = array[v].toUpperCase()
            }
        }
        return nome = array.join("")
    }
    return 0;
}

console.log(snakeCasetoCamelCase("snake_case-to_Camel-case"))
