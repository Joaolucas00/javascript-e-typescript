function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i); // a variável está definida aqui, dentro da função
    /** let vs var
     * A diferença está no escopo
     * 
     * var -> function
     * let -> block
     * const -> block
     * let está definida dentro do bloco onde a variável let é definida
     * 
     */

    for (let j = 0; j < 5; j++) {
        console.log(j); // j só funciona aqui
    }

    console.log(j); // erro, variável não está definida
}

sayHello();
