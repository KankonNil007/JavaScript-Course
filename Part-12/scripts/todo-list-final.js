const myArray = [];

function renderTodoList() {
    let TodoHTML = '';

myArray.forEach(function(element, index) {
    const name = element.name;
    const dueDate = element.dueDate;
    const html = `
    <div>
       ${name}
    </div>
    
    <div>
        ${dueDate}
    </div>
        
    <button class="b2" onclick="
        myArray.splice(${index}, 1);
        renderTodoList();
    ">
        Delete
    </button>
        `
    TodoHTML += html;
});

    document.querySelector('.d1').innerHTML = TodoHTML;
}

function toDoList() {
    const inputedValue = document.querySelector('.i1');
    const inputedDate = document.querySelector('.i2');
    const toDoTask2 = inputedDate.value;
    const toDoTask = inputedValue.value;

    myArray.push({
        name: toDoTask,
        dueDate: toDoTask2
    });
    console.log(myArray);

    inputedValue.value = '';
    inputedDate.value = '';

    renderTodoList();
};

function keyEvent(event) {
    if (event.key === 'Enter') {
        toDoList();
    }
}