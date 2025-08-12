/* eslint-disable unicorn/no-empty-file */
/* eslint-disable */
function addTask() {
    const input = document.querySelector('#taskInput');
    const task_content = input.value.trim();
    if (!task_content) {
        alert('Enter at least one string as task.');
        return;
    }

    const ul = document.querySelector('#todoList');
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task_content;
    const edit_button = document.createElement('button');
    edit_button.textContent = 'edit';
    edit_button.addEventListener('click', editTask);
    const delete_button = document.createElement('button');
    delete_button.textContent = 'delete';
    delete_button.addEventListener('click', deleteTask);
    li.append(span, edit_button, delete_button); /* Sibling */
    ul.append(li);

    input.value = '';
    input.focus();
}

function editTask(e) {
    span = e.currentTarget.closest('li').querySelector('span');
    span.contentEditable = 'true';
    span.focus();
}

function deleteTask(e) {
    e.currentTarget.closest('li').remove();
}