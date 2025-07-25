let calculation = JSON.parse(localStorage.getItem('realCalculation')) || '';

let showCalculation = document.querySelector('.p99');

showCalculation.innerHTML = calculation;

function updateCalculation(buttonClick) {
    if (buttonClick === 'Clear') {
        calculation = '';
        showCalculation.innerHTML = calculation;
    } else if (buttonClick === ' = ') {
        calculation = eval(calculation);
        showCalculation.innerHTML = calculation;
    } else {
        calculation += `${buttonClick}`;
        showCalculation.innerHTML = calculation;
    }

    localStorage.setItem('realCalculation', JSON.stringify(calculation));
}