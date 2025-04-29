const myArray = [];

function renderTodoList() {
    let TodoHTML = '';

    myArray.forEach((element, index) => {
        const name = element.name;
        const dueDate = element.dueDate;
        const html = `
        <div>
        ${name}
        </div>
        
        <div>
            ${dueDate}
        </div>
            
        <button class="b2 del-btn">
            Delete
        </button>
            `
        TodoHTML += html;
    });

    document.querySelector('.d1').innerHTML = TodoHTML;

    document.querySelectorAll('.del-btn').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            myArray.splice(index, 1);
            renderTodoList();
        }
        )
    });
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

document.querySelector('.add-btn').addEventListener('click', () => {
    toDoList();
});