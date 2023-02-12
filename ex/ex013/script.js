// Function normal
function calc_porcen(n1=0, porcen=100) {
    return n1*(porcen/100)
}

function funcao_recursiva_fatorial(n) {
    if (n==1) {
        return 1
    } else {
        return n * funcao_recursiva_fatorial(n - 1)
    }
    
}

// Function Expression
const calcPorcen = function(n=0, p=100){return n*(p/100)}

// Arrow Function, a ideai é ser mais simples do que uma função comum.
const calcularPorcentagem = (num=0, por_num=100) => {return num * (por_num/100)}


console.log(calcularPorcentagem(10, 10)) //Usando Arrow Function
console.log(calcPorcen(100, 50)) // Usando Function Expression
console.log(calc_porcen(100, 20)) // Usando uma Function normalmente


console.log(funcao_recursiva_fatorial(5))