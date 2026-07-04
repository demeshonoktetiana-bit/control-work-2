

const btnAddPair = document.getElementsByClassName('btnAddPair');
const inputAddPair = document.getElementById('name-input');
const ul = document.querySelector('.items-list');
const form = document.getElementById('form');


btnAddPair[0].addEventListener('click', (e) => {
    e.preventDefault();
    if(inputAddPair.value !== '' && inputAddPair.value .includes('=') ) {

        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.innerText = inputAddPair.value;
        li.appendChild(checkbox);
        ul.appendChild(li);
        form.reset()
    }



})


const btnDeletePair = document.querySelector('.btnDelete');
btnDeletePair.addEventListener('click', (e) => {
    e.preventDefault();


})