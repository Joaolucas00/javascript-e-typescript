"use strict"

const pessoa = {
    /*
    conversar() {
        setTimeout(function () {
            console.log("this", this);
        }, 1000)
    } this retorna um objeto window
    */

    conversar () {
        setTimeout( () => {
            console.log("this", this);
        })
    }
}

pessoa.conversar();

/**
 * Nesse caso, o strict mode não sobrescreve esse comportamento
 * Isso acontece porque a função callback não faz parte de nenhum objeto
 * 
 * arrow functions don't rebind the this keyword
 */