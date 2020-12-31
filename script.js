const calendarElements = Array.from(document.querySelectorAll('.calendar li'))

const input = document.querySelector('#day')

const button = document.querySelector('#submitBt')

function checkNumber() {
    const isNumber = input.value
    for(let i = 0; i < calendarElements.length; i++) {
        const isDay = calendarElements[i].innerHTML
        if (isDay === isNumber) calendarElements[i].classList.add('is-done')
    }
}


button.addEventListener('click', checkNumber)



