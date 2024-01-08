function camelCaseTo_snake_case (str) {
    if (/[A-Z]/.test(str)) {
        let array = []
        for (let n = 0; n < str.length; n++) {
            array.push(str[n])
        }
        for (let v = 0; v < array.length; v++) {
            if (/[A-Z]/.test(array[v])) {
                array[v] = array[v].toLowerCase()
                array.splice(v, 0, "_")
            }
        }
        return str = array.join("")
    }
    return 0
}

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



function changeCase(str, snake_or_camel = "snake") {
    if (snake_or_camel == "camel") {
        return snakeCasetoCamelCase(str)
    }
    return camelCaseTo_snake_case(str)
}

console.log(changeCase("oláMundo", ""));