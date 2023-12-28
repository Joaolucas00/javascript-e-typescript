const pessoa = {
    nome: 'João',
    andar: function() {},
    conversar() {} // sintax mais simples do que a anterior
}

pessoa.conversar;
pessoa.nome;

/**
 * Outra maneira de acessar propriedades melhor
 */

const targetMember = 'name';
pessoa[targetMember.value] = 'Lucas'; // caso targetMember seja um input, podemos acessar o valor dele dinamicamente assim.