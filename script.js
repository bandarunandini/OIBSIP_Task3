function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const date = new Date();
    const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    const task = {
        text: taskText,
        completed: false,
        date: dateString
    };

    const pendingTasksList = document.getElementById("pendingTasksList");
    const completedTasksList = document.getElementById("completedTasksList");

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
        <span class="date">${task.date}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    if (task.completed) {
        completedTasksList.appendChild(li);
    } else {
        pendingTasksList.appendChild(li);
    }

    taskInput.value = "";
}

function completeTask(button) {
    const li = button.parentElement;
    const span = li.querySelector("span:first-child");
    span.classList.toggle("completed");

    const completedTasksList = document.getElementById("completedTasksList");
    const pendingTasksList = document.getElementById("pendingTasksList");

    if (span.classList.contains("completed")) {
        completedTasksList.appendChild(li);
    } else {
        pendingTasksList.appendChild(li);
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

