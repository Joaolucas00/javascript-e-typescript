//console.log(document.domain) pra mostrar o dominio
//console.log(document.URL) mostra URL
//console.log(document.title) mostra title
//document.title = "items lister"
//console.log(document.doctype);

//console.log(document.head)
//console.log(document.body)
//console.log(document.all) !! depreciativo !!

//console.log(document.forms);
//console.log(document.links); pega todos os links da página

//console.log(document.images)

//console.log(document.getElementById('h1').innerText); // presta atenção do estilo
//console.log(document.getElementById('h1').textContent); // mostra tudo que ta dentro

//let section = document.getElementsByClassName("section");
//console.log(section);
//console.log(section[1])

//console.log(document.querySelector('#header'));
//console.log(document.querySelectorAll('.section'));

//let lastSection = document.querySelector('.section:nth-child(1)');
//console.log(lastSection);


var odd = document.querySelectorAll('.section:nth-child(odd)');
var even = document.querySelectorAll('.section:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "green";
}

for (var i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = "yellow";
}