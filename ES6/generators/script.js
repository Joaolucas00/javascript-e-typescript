function* generator() {
    console.log("primeiro");
    yield 1
    console.log("secundo");
    yield 2
    console.log("Terceiro");
    yield 3
    console.log("Último");
}

const generatorObj = generator();
console.log(generatorObj);

console.log(generatorObj.next()); // pausa no yield 1 até o próximo yield
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());

/**
 * next - execute the code inside of the generator
 * 
 */

// Outro exemplo

function* generateId() {
    let id = 0;
    while (true) {
        yield id
        id++
    }
}
const obj = generateId();
function ativaGenerator() {
    /*
    let idText = document.getElementById('id')
    idText.innerHTML = obj.next().value
    */
    document.getElementById('id').innerHTML = obj.next().value
}

function* gerarId() {
    let id = 1

    while (true) {
        const increment = yield id
        if (increment != null) {
            id += increment
        } else {
            id++
        }
    }
}

const objId = gerarId()

console.log(objId.next());
console.log(objId.next());
console.log(objId.next());
console.log(objId.next());
console.log(objId.next(4)); // o que tu passar para next() p yield recebe
console.log(objId.next());
console.log(objId.return(11));
console.log(objId.next());
