console.log("Hello");

var todoListArray = []

function addToDo() {
  console.log("Add to-do");
  let todoInput = document.getElementById("todoInput");
  console.log(todoInput);
  console.log(todoInput.value);
  let ol = document.getElementById("todoList")
  console.log(ol);
  
 
  if (todoInput.value.trim() === "") {
    alert("Please enter a to-do item.");
  }
  else {
    console.log(todoListArray);
    todoListArray.push(todoInput.value);
    console.log(todoListArray);
  }
  todoList.innerHTML = ""
  for (let index = 0; index < todoListArray .length; index++) {
    console.log(index);
    ol.innerHTML += "<li> " + (todoListArray[index]) + "</li>"
    console.log(todoList.innerHTML);
  }
//   console.log(todoListArray);
//   todoListArray.push(todoInput.value);
//   console.log(todoListArray);
}