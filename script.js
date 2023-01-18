// Get the elements
const addTaskButton = document.getElementById("add-task-button");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Add event listener to the add task button
addTaskButton.addEventListener("click", function() {
  // Get the task from the input field
  let task = taskInput.value;

  // Create a new list item
  let newTask = document.createElement("li");
  newTask.innerHTML = task;

  // Add a 'delete' button to the task
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  newTask.appendChild(deleteButton);

  // Add the task to the task list
  taskList.appendChild(newTask);

  // Clear the input field
  taskInput.value = "";
});

// Add event listener to the task list
taskList.addEventListener("click", function(event) {
  // Check if the clicked element is a 'delete' button
  if (event.target.classList.contains("delete-button")) {
    // Remove the parent list item (which contains the task and the delete button)
    event.target.parentNode.remove();
  }
});
