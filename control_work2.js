

const btnAddPair = document.getElementsByClassName('btnAddPair');
const inputAddPair = document.getElementById('name-input');
const ul = document.querySelector('.items-list');
const form = document.getElementById('form');



//regex

btnAddPair[0].addEventListener('click', (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Zа-яА-Я0-9]+\s*=\s*[a-zA-Zа-яА-Я0-9]+$/

    if(regex.test(inputAddPair.value)) {

        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.innerText = inputAddPair.value;
        li.appendChild(checkbox);
        ul.appendChild(li);
        form.reset()
    }
    else{
        alert('Please enter a valid Name/Value pair');
        form.reset()
    }

})


const btnDeletePair = document.querySelector('.btnDelete');
btnDeletePair.addEventListener('click', (e) => {
    e.preventDefault();

    const checkboxPair = document.querySelectorAll('input[type="checkbox"]');
    checkboxPair.forEach((checkbox) => {
        if(checkbox.checked) {
            checkbox.parentElement.remove()
        }
    })

})