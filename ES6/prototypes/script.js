const animal = {
    som: "som de animal",
    tipo: "animal",
    emitirSom: function() {
        console.log(this.som);
    }
}

const gato = {
    som: "Miau",
    tipo: "gato"
}

Object.setPrototypeOf(gato, animal); // caso ele não encontra uma propriedade ou função, ele vai no objeto animal e busca pela propriedade e função
gato.emitirSom(); // nesse caso ele busca tanto por emitirSom quanto pela propriedade som, se já existir essa função em gato então ele não busca em animal, executa a função que está em gato
// Só acessa no protótipo se não existir

// Também da pra gerar uma cadeia de protótipos

const outroGato = {
    tipo: 'Outro gato',
    miar: function() {
        console.log(this.som.toUpperCase());
    }
}

Object.setPrototypeOf(outroGato, gato);

outroGato.miar();

console.log(Object.getPrototypeOf(outroGato));