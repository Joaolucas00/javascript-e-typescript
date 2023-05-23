// var button = document.querySelector('#button').addEventListener('click', () => {console.log('click');});

var button = document.querySelector('#button').addEventListener('click', buttonClick);

function buttonClick(e) {
    var input = document.querySelector('input[type=text]');
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    li.textContent = input.value;
    console.log(li);
    ul.appendChild(li);

    console.log(e.target);
    console.log(e.target.id);

    console.log(e.clientX); // posição do mouse X 
    console.log(e.clientY); // posição do mouse Y

    console.log(e.offsetX); // posição do mouse (X) no elemento atual
    console.log(e.offsetY); // posição do mouse (Y) no elemento atual

    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}
