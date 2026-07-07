const btnAddPair = document.getElementsByClassName('btnAddPair');
const inputAddPair = document.getElementById('name-input');
const ul = document.querySelector('.items-list');
const form = document.getElementById('form');



//regex

let pairList = [];

btnAddPair[0].addEventListener('click', (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Zа-яА-Я0-9]+\s*=\s*[a-zA-Zа-яА-Я0-9]+$/

    if(regex.test(inputAddPair.value)) {

        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let span = document.createElement('span');
        span.innerText = inputAddPair.value;

        li.append(span,checkbox);
        ul.appendChild(li);
        pairList.push(li);
        form.reset()
    }
    else{
        alert('Please enter a valid Name/Value pair');
        form.reset()
    }

});

const btnSortByName = document.querySelector('.btnSortByName');
btnSortByName.addEventListener('click', (e) => {
    e.preventDefault();

    let pairs = [...pairList].filter(li => ul.contains(li));

     pairs.sort((a, b) => {
         return a.querySelector('span').innerText.localeCompare(b.querySelector('span').innerText);
     });
     ul.innerHTML = '';

     for(const li of pairs) {
         ul.appendChild(li);
     }
});

const btnSortByValue = document.querySelector('.btnSortByValue');
btnSortByValue.addEventListener('click', (e) => {
    e.preventDefault();

    pairList = pairList.filter(li=> ul.contains(li));

    let sortList = [...pairList].sort((a, b) => {
        const textA = a.querySelector('span').innerText;
        const textB = b.querySelector('span').innerText;

        const valueA = textA.split('=')[1] || '';
        const valueB = textB.split('=')[1] || '';

        return valueA.localeCompare(valueB, undefined, {numeric: true});
    });

       ul.innerHTML = '';

       for(const li of sortList) {
           ul.appendChild(li);

       }
});

const btnDeletePair = document.querySelector('.btnDelete');
btnDeletePair.addEventListener('click', (e) => {
    e.preventDefault();

    const checkboxPair = document.querySelectorAll('input[type="checkbox"]');
    checkboxPair.forEach((checkbox) => {
        if(checkbox.checked) {
            checkbox.parentElement.remove()
        }
    })

});



