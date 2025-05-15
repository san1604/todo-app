console.log("Hello");

var todoListArray = []
var count = 0

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
    todoListArray.push({
      id: ++count,
      todo: todoInput.value,
      completed: false
    })
    console.log(todoListArray);
  }
  todoList.innerHTML = ""
  for (let index = 0; index < todoListArray .length; index++) {
    console.log(index);
    // ol.innerHTML += "<li> " + (todoListArray[index]) + "</li>"
    ol.innerHTML += "<li> <input type='checkbox'/> <label>"+todoListArray[index].todo+"</label> <button>Edit</button> <button>Delete</button> </li>"
    console.log(todoList.innerHTML);
  }
//   console.log(todoListArray);
//   todoListArray.push(todoInput.value);
//   console.log(todoListArray);
}
function deleteToDo() {
  console.log("Delete to-do");
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
    todoListArray.pop({
      id: ++count,
      todo: todoInput.value,
      completed: false
    })
    console.log(todoListArray);
  }
  todoList.innerHTML = ""
  for (let index = 0; index < todoListArray .length; index++) {
    console.log(index);
    // ol.innerHTML += "<li> " + (todoListArray[index]) + "</li>"
    ol.innerHTML += "<li> <input type='checkbox'/> <label>"+todoListArray[index].todo+"</label> <button>Edit</button> <button>Delete</button> </li>"
    console.log(todoList.innerHTML);
  }
}