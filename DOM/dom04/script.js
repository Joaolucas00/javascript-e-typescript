var btnAdd = document.querySelector('#btn-add');
var ul = document.querySelector('ul');
var search = document.querySelector('input[type="search"]');
btnAdd.addEventListener('click', addItem);
ul.addEventListener('click', delItem);

search.addEventListener('keyup', filter);

function filter(e) {
    if (e.target.value.trim() != '') {
        
    }
}

function addItem(e) {
    let inputText = document.querySelector('input[type="text"]');
    if (inputText.value.trim() == '') {
        alert('Item vazio.');
    } else {
        let ul = document.querySelector('ul');
        let li = document.createElement('li');
        let deleteBtn = document.createElement('button');
        li.textContent = inputText.value;
        //li.appendChild(document.createTextNode(inputText.value));
        deleteBtn.appendChild(document.createTextNode('DEL'));
        deleteBtn.className = 'delete';
        li.appendChild(deleteBtn);
        ul.appendChild(li);
        inputText.value = '';
    }
}

function delItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            ul.removeChild(li);
        }
    }
}