function clickButton(button) {
    let buttonFunc = document.querySelector(`.${button}`);

    if (!buttonFunc.classList.contains('is-toggled')) {
        buttonFunc.classList.add('is-toggled');
    } else {
        buttonFunc.classList.remove('is-toggled');
    }
};