function snakeCasetoCamelCase (str) {
    if (str.includes("_") || str.includes("-")) {
        let array = []
        for (let n = 0; n < str.length; n++) {
            array.push(str[n])
        }
        for (let v = 0; v < array.length; v++) {
            if (array[v] == "_" || array[v] == "-") {
                array.splice(v, 1)
                array[v] = array[v].toUpperCase()
            }
        }
        return str = array.join("")
    }
    return 0;
}



console.log(snakeCasetoCamelCase("snake_case-to_Camel-case"))
