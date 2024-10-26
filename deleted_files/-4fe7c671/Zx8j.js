const tasks = document.getElementById("tasks");

function addtask() {
  const taskInput = document.getElementById("taskInput");
  const input = taskInput.value;

  if (input !== '') {
    const li = document.createElement('li');
    li.innerHTML = input;
    tasks.append(li);
    taskInput.value = ''; // Clear the input field
  }
}