const tasks = document.getElementById("tasks");

function addtask() {
  const taskInput = document.getElementById("taskInput");
  const input = taskInput.value;

  if (input !== '') {
    const li = document.createElement('li');
    li.textContent = input;
    tasks.append(input);
    taskInput.value = ''; // Clear the input field
  }
}