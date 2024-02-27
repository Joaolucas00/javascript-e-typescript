export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // private negociacoes: Negociacao[] mesma declaração acima
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
