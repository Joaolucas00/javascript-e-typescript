import { Objeto } from "../interfaces/objeto.js";


export class Negociacao implements Objeto<Negociacao> {

    constructor(
        private readonly _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ) {}
    
     public static criaDe(data: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(data.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public paraTexto(): string {
        return `Data: ${this._data}
                     Quantidade: ${this.quantidade}
                     Valor: ${this.valor}    
        `;
    
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear()
    }

    get volume(): number {
        return this.quantidade * this.valor
    }

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data
    }
}











/**
 * 
 *     private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

        get data(): Date {
        return this._data
    }

    get quantidade(): number {
        return this._quantidade
    }

    get valor(): number {
        return this._valor
    }

 */