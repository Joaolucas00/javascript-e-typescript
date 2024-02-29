import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";


export class Negociacoes extends Imprimivel {
    private negociacoes: Array<Negociacao> = [];
    // private negociacoes: Negociacao[] mesma declaração acima
    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao> /*mesma coisa que readonly Negociacao[] */ {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return `Negociações: ${this.negociacoes}`    
    }
}