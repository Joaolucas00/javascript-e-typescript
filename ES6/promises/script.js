// promise
let promise = new Promise((resolve, reject) => {
    let result = 1 + 1
    if (result == 2) {
        resolve("O valor é 2")
    } else {
        reject('Não é igual a 2')
    }
})

promise.then((msg) => {
    console.log("Sucesso: " + msg);
}).catch((err) => {
    console.log("Erro: " + err);
})



// callback
function callBack(callback) {
    callback({n1: 1, n2: 2}, [1, 2, 3])
}

callBack((num, array) => {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    n3 = num.n1 + num.n2;    
    console.log(`A soma de ${num.n1} + ${num.n2} é ${n3}`);
})
