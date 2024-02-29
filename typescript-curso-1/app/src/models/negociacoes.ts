import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";


export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
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

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    }
}