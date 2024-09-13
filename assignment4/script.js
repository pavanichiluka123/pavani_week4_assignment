let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value;
    if (taskName) {
        const task = {
            id: tasks.length + 1,
            name: taskName
        };
        tasks.push(task);
        displayTasks();
        taskInput.value = ''; // clear input
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
}

function updateTask(taskId) {
    const newTaskName = prompt("Update task name:");
    if (newTaskName) {
        tasks = tasks.map(task => 
            task.id === taskId ? { ...task, name: newTaskName } : task
        );
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // clear list
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${task.name}
            <div>
                <button onclick="updateTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

// Initial display
displayTasks();
