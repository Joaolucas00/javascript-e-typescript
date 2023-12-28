class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    andar() {
        console.log("andando..");
    }
}

class Teacher extends Pessoa {
    constructor(nome, degree) {
        super(nome); // construtor da classe pai
        this.degree = degree;
    }
}

const pessoa = new Pessoa('João');
console.log(pessoa.nome);
pessoa.andar();

const teacher = new Teacher('Lucas', 'MSc');
teacher.andar();

const falar = fala => `falando: ${fala}`;
teacher.falar = falar('Olá');
console.log(teacher);
