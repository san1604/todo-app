$(function() 
{
    updateFrontend()
});
// console.log("Hello")
var count = 0
var todoListArray = [
    {
        id: ++count,
        todo: "Todo 1",
        completed: false
    }, 
    {
        id: ++count,
        todo: "Todo 2",
        completed: false
    },
    {
        id: ++count,
        todo: "Todo 3",
        completed: false
    },
    {
        id: ++count,
        todo: "Todo 4",
        completed: false
    }
]

function addTodo()
{
    console.log("Add Todo!!")
    let todoInput = document.getElementById("todoInput")
    console.log(todoInput)
    console.log(todoInput.value)
    if(todoInput.value.trim() == "")
    {
        alert("Todo title cannot be blank!!!")
    }
    else
    {
        console.log(todoListArray)
        todoListArray.push({
            id: ++count,
            todo: todoInput.value,
            completed: false
        })
        console.log(todoListArray)
    }
    updateFrontend()
}
function deleteTodo()
{
    console.log("Delete Todo!!")
    let todoInput = document.getElementById("todoInput")
    console.log(todoInput)
    console.log(todoInput.value)
    if(todoInput.value.trim() == "")
    {
        alert("Todo title cannot be blank!!!")
    }
    else
    {
        console.log(todoListArray)
        todoListArray.pop({
            id: ++count,
            todo: todoInput.value,
            completed: false
        })
        console.log(todoListArray)
    }
    updateFrontend()
}
var editingTodoFlag = -1


function updateFrontend()
{
    let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""
    for(let index = 0; index<todoListArray.length; index++)
    {
        // todoList.innerHTML += "<li>"+todoListArray[index]+"</li>"
        if(todoListArray[index].completed)
            todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+todoListArray[index].id+")' checked/><label><s>"+todoListArray[index].todo+"</s></label><button onclick = 'onEditToDo("+todoListArray[index].id+")'>Edit</button><button onclick = 'onDeleteToDo("+todoListArray[index].id+")'>Delete</button></li>"
        else if(editingTodoFlag == todoListArray[index].id){
            todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+todoListArray[index].id+")'/><input value = "+todoListArray[index].todo+" id = 'editingTodo'></input><button onclick = 'saveToDo("+todoListArray[index].id+")'>Save To-Do</button><button onclick = 'onDeleteToDo("+todoListArray[index].id+")'>Delete</button></li>"
        }
        else
             todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+todoListArray[index].id+")'/><label>"+todoListArray[index].todo+"</label><button onclick = 'onEditToDo("+todoListArray[index].id+")'>Edit</button><button onclick = 'onDeleteToDo("+todoListArray[index].id+")'>Delete</button></li>"
    }
}
function onEditToDo(todoID) {
  console.log("Editing ID: ", todoID);
  editingTodoFlag = todoID
  updateFrontend()
}
function saveToDo(todoID){
  console.log("Saving this: ", todoID);
  let updatedToDoText = document.getElementById("editingTodo").value
  console.log(updatedToDoText);
  
  todoListArray = todoListArray.map ((todoObj) => {
      if(todoID == todoObj.id){
        todoObj.todo = updatedToDoText
      }
      return todoObj
  })
  editingTodoFlag = -1
  updateFrontend()

}

function onTodoComplete(checkbox, todoID)
{
    // console.log("Checked change!", checkbox.checked)
    // console.log("Todo ID:", todoID)
    //find the correct object from the array based on id
    //update the object to change the checked property
    //update the array
    console.log(todoListArray)
    todoListArray = todoListArray.map((todoObj)=>
    {
        if(todoObj.id == todoID)
        {
            //console.log("Found!!!", todoObj.todo)
            // if(checkbox.checked)
            //     todoObj.checked = true
            // else
            //     todoObj.checked = false

            todoObj.completed = checkbox.checked
        }
        return todoObj
    })
    console.log(todoListArray)
    //update the Frontend
    updateFrontend()
}
function onDeleteToDo(todoID) {
  console.log("ID to be deleted: ", todoID);
  todoListArray = todoListArray.filter((todoObj) =>{
    return !(todoID == todoObj.id)
  })
  updateFrontend()
}














/*
console.log("Hello");

var todoListArray = []
var count = 0

function addToDo() {
  console.log("Add to-do");
  let todoInput = document.getElementById("todoInput");
  console.log(todoInput);
  // console.log(todoInput.value);
  let ol = document.getElementById("todoList")
  // console.log(ol);
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
    // console.log(todoListArray);
  }
  updateFrontend()
//   console.log(todoListArray);
//   todoListArray.push(todoInput.value);
//   console.log(todoListArray);
}
function deleteToDo() {
  console.log("Delete to-do");
  let todoInput = document.getElementById("todoInput");
  console.log(todoInput);
  // console.log(todoInput.value);
  let ol = document.getElementById("todoList")
  // console.log(ol);
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
    // console.log(todoListArray);
  }
  updateFrontend()
}
// Add a function to mark a todo as completed
//   1. Write a function to set a specific object's completed property to true
//   2. Update the list
function onToDoComplete(checkbox, todoID){
  console.log("Checked Change", checkbox.checked);
  console.log("ToDO ID:", todoID );
  todoListArray = todoListArray.map((todoObj) =>
  {
    if (todoObj.id == todoID) {
      console.log("Found!!!", todoObj.todo);
    }
    return todoObj
  })
}
function updateFrontend()
{
    let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""
    for(let index = 0; index<todoListArray.length; index++)
    {
        // todoList.innerHTML += "<li>"+todoListArray[index]+"</li>"
        todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'/><label>"+todoListArray[index].todo+"</label><button>Edit</button><button>Delete</button></li>"
        
        if(todoListArray[index].completed)
            todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+todoListArray[index].id+")' checked/><label>"+todoListArray[index].todo+"</label><button>Edit</button><button>Delete</button></li>"
        else
            todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+todoListArray[index].id+")'/><label>"+todoListArray[index].todo+"</label><button>Edit</button><button>Delete</button></li>"
    }
}

*/