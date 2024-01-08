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

console.log(camelCaseTo_snake_case("camelCaseConverting"))
