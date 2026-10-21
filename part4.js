let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(function (task, index) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) span.classList.add("done");
    span.style.cursor = "pointer";
    span.addEventListener("click", function () {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

document.getElementById("addTaskBtn").addEventListener("click", function () {
  const value = taskInput.value.trim();
  if (value === "") return;
  tasks.push({ text: value, completed: false });
  taskInput.value = "";
  renderTasks();
});
