const myArray = [];

function renderTodoList() {
    let TodoHTML = '';

    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];
        const html = `<p>${element}</p>`
        TodoHTML += html;
    }

    document.querySelector('.d1').innerHTML = TodoHTML;
}

function toDoList() {
    const inputedValue = document.querySelector('.i1');
    const toDoTask = inputedValue.value;

    myArray.push(toDoTask);
    console.log(myArray);

    inputedValue.value = '';

    renderTodoList();
};

function keyEvent(event) {
    if (event.key === 'Enter') {
        toDoList();
    }
}