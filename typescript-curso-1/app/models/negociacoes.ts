import { Negociacao } from "./negociacao.js";


export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
    // private negociacoes: Negociacao[] mesma declaração acima
    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> /*mesma coisa que readonly Negociacao[] */ {
        return this.negociacoes;
    }

}