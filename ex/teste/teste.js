const pokemons = [
    {type: "raio", nome: "pika"},
    {type: "agua", nome: "tilapia"},
    {type: "agua", nome: "atum"},
]

const pokemonsTipo = pokemons.reduce((pokemonsTipo, pokemonAtual) => {
    console.log("Pokemon Atual:  ", pokemonAtfual);
    console.log("Pokemon Tipo:  ", pokemonsTipo);
    pokemonsTipo[pokemonAtual.type] = pokemonsTipo[pokemonAtual.type] || []
    console.log("PokemonTipo[pokemonAtual.type]:    ", pokemonsTipo[pokemonAtual.type])
    pokemonsTipo[pokemonAtual.type].push(pokemonAtual)
    return pokemonsTipo
}, {})

console.log(pokemonsTipo);
