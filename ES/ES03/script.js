//"use strict" - strict mode, basta colcar isso no começo do arquivo que ele vai ativar

const pessoa = {
    nome: "Joao",
    andar() {console.log(this);}
}

pessoa.andar();

const andar = pessoa.andar;
andar(); 
// retorna um objeto window
// se o strict mode está ativo, retorna undefined