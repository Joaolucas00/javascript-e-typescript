import { Pessoa } from './pessoa';

export function promote() {}

export default class Teacher extends Pessoa {
    constructor(nome, degree) {
        super(nome);
        this.degree = degree;
    }

    teach() {
        console.log("a^2 + b^2 = c^2");
    }
}