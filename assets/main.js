// Global variables for DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();


    if (taskText === "") {
        alert("Task cannot be empty. Please enter a valid task.");
        return;
    }

    const existingTasks = Array.from(taskList.querySelectorAll('.task-content')).map(el => el.textContent.toLowerCase());
    if (existingTasks.includes(taskText.toLowerCase())) {
        alert(`The task "${taskText}" already exists.`);
        taskInput.value = ''; // Clear input on failed validation
        return;
    }

    const taskItem = createTaskElement(taskText);

    taskList.appendChild(taskItem);

    taskInput.value = '';
}


PromiseRejectionEvent.alert