var h2 = document.querySelector('#h2');
var main = document.querySelector('main')

// parent, child, first, last
console.log(h2.parentElement.parentElement);
console.log(main.childNodes); // text é um espaço vazio
console.log(main.children); // então é melhor usar children
console.log(main.children[1]);
console.log(main.firstChild); // retorna text
console.log(main.firstElementChild); // não retorna text

console.log(main.lastChild);
console.log(main.lastElementChild);

// siblings


console.log(main.nextSibling); // text
console.log(main.nextElementSibling); // sem text
console.log(main.previousSibling);
console.log(main.previousElementSibling);
