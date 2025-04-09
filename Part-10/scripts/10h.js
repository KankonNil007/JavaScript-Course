function inputKeyFunction(event) {
    if (event.key === 'Enter') {
    costCalculation();
}
}

function costCalculation() {
const inputedCost = document.querySelector('.TotalCost');

if (inputedCost.value <= 40 && inputedCost.value > 0) {
    inputedCost.value = (Number(inputedCost.value) * 100 + 1000) / 100;
    document.querySelector('.p1').innerHTML = `$${inputedCost.value}`;
    document.querySelector('.p1').classList.remove('error');
} else if (inputedCost.value <= 0) {
    document.querySelector('.p1').classList.add('error');
    document.querySelector('.p1').innerHTML = `Error: cost cannot be less than $0`;
} else if (inputedCost.value > 40) {
    inputedCost.value;
    document.querySelector('.p1').innerHTML = `$${inputedCost.value}`;
    document.querySelector('.p1').classList.remove('error');
}

}