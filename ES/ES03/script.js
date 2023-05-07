"use strict" //- strict mode, basta colcar isso no começo do arquivo que ele vai ativar

const pessoa = {
    nome: "Joao",
    andar() {console.log(this);}
}

pessoa.andar();

const andar = pessoa.andar.bind(pessoa); // retorna uma nova instancia da função andar e configura this para um objeto pessoa
andar(); 
// retorna um objeto window
// se o strict mode está ativo, retorna undefined

/**
 * Dentro do JavaScript, funções são objetos, então andar() é um objeto
 * bind() - o que passar de argumento para ele, irá determinar o valor de this
 */