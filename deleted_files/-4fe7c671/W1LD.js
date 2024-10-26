const tasks = document.getElementById("tasks");

function addtask() {
  const taskInput = document.getElementById("taskInput");
  const input = taskInput.value;

  if (input !== '') {
    tasks.appendChild(input);
    taskInput.value = ''; // Clear the input field
  }
}