function convertingArrayToString(str) {
    let array = []
    for (let n = 0; n < str.length; n++) {
        array.push(str[n])
    }
    return array
}

function isBadString(str) {
    if (/[A-Z]/.test(str) && str.includes("_") && str.includes("-")) {
        return true
    } else if ( (/[A-Z]/.test(str) && str.includes("_")) || (/[A-Z]/.test(str) && str.includes("-")) || (str.includes("-") && str.includes("_"))) {
        return true
    }
    return false
}

function to_snake_case (str) {
    if (/[A-Z]/.test(str) || str.includes("-")) {
        let array = convertingArrayToString(str)
        for (let v = 0; v < array.length; v++) {
            if (/[A-Z]/.test(array[v])) {
                array[v] = array[v].toLowerCase()
                array.splice(v, 0, "_")
            } else if (array[v] == "-") {
                array.splice(v, 1, "_")
            }
        }
        return array.join("")
    }
    return str
}

function toCamelCase (str) {
    if (str.includes("_") || str.includes("-")) {
        let array = convertingArrayToString(str)
        for (let v = 0; v < array.length; v++) {
            if (array[v] == "_" || array[v] == "-") {
                array.splice(v, 1)
                array[v] = array[v].toUpperCase()
            }
        }
        return array.join("")
    }
    return 0;
}

function toKebabCase (str) {
    if (/[A-Z]/.test(str) || str.includes("_")) {
        let array = convertingArrayToString(str)
        for (let v = 0; v < array.length; v++) {
            if (array[v] == "_") {
                array.splice(v, 1, "-")
            } else if (/[A-Z]/.test(array[v])) {
                array.splice(v, 0, "-")
                array[v+1] = array[v+1].toLowerCase()
            }
        }
        return array.join("")
    }
    return 0
}

function changeCase(str, snake_or_camel = "snake") {
    if (snake_or_camel == "camel") {
        return toCamelCase(str)
    } else if (snake_or_camel == "kebab") {
        return toKebabCase(str)
    }
    return to_snake_case(str)
}

console.log(changeCase("oláMundo", "kebab"));