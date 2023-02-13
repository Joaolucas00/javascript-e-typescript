let usuario = {
    nome: 'João',
    idade: 18,
    peso: 91,
    engordar(n1) {
        this.peso += n1
    },
    fazerAniversario() {
        this.idade += 1
    }
}

console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.peso)
usuario.engordar(5)
usuario.fazerAniversario()
console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.peso)