function clickButton() {
    let buttonFunc = document.querySelector('.b1');

    if (!buttonFunc.classList.contains('is-toggled')) {
        buttonFunc.classList.add('is-toggled');
    } else {
        buttonFunc.classList.remove('is-toggled');
    }
};