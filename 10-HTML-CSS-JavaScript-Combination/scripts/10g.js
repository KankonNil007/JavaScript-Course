function clickButton(button) {
    let buttonFunc = document.querySelector(`.${button}`);

    if (!buttonFunc.classList.contains('is-toggled')) {
        closePreviousButton();
        buttonFunc.classList.add('is-toggled');
    } else {
        buttonFunc.classList.remove('is-toggled');
    }
};

function closePreviousButton() {
    const buttonFunc2 = document.querySelector('.is-toggled');

    if (buttonFunc2) {
        buttonFunc2.classList.remove('is-toggled');
    }
};