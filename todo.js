console.log("Hello");

var todoListArray = []

function addToDo() {
  console.log("Add to-do");
  let todoInput = document.getElementById("todoInput");
  console.log(todoInput);
  console.log(todoInput.value);
  if (todoInput.value.trim() === "") {
    alert("Please enter a to-do item.");
    
  }
  else {
    console.log(todoListArray);
    todoListArray.push(todoInput.value);
    console.log(todoListArray);
  }
//   console.log(todoListArray);
//   todoListArray.push(todoInput.value);
//   console.log(todoListArray);
}