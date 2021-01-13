const calendarElements = Array.from(document.querySelectorAll('.calendar li'));
const isTarget = document.querySelectorAll('li');
const input = document.querySelector('#day');
const textInput = document.querySelector('#text');
const isSavedText = document.querySelector('#savedText')
const button = document.querySelector('#submitBt');
const localStorageTransactions = JSON.parse(localStorage.getItem('my-data'));
let transactions = localStorage.getItem('my-data') !== null ? localStorageTransactions : [];

const updateData = () => {
    localStorage.setItem('my-data', JSON.stringify(transactions));
}

if (localStorageTransactions) {
    isTarget.forEach(element => {
        for (let j = 0; j < localStorageTransactions.length; j++) {
            let savedCounter = localStorageTransactions[j].number;
            if (element.textContent == savedCounter) {
                console.log(element);
                element.classList.add('is-done');
                element.addEventListener('click', () => {
                    const myText = localStorageTransactions[j].text;
                    isSavedText.textContent = myText;
                })
            }
        }
    });
}

function save() {
    const isNumber = input.value;
    for (let i = 0; i < calendarElements.length; i++) {
        const isDay = calendarElements[i].textContent;
        if (isDay === isNumber) {
            calendarElements[i].classList.add('is-done');
        }
    }
    const myObj = {
        number: input.value,
        text: textInput.value
    };
    transactions.push(myObj);
    updateData();
}


button.addEventListener('click', save);