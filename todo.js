$(function() 
{
    updateFrontend()
});
// console.log("Hello")
var count = 0
var todoListArray = [
    // {
    //     id: ++count,
    //     todo: "Todo 1",
    //     completed: false
    // }, 
    // {
    //     id: ++count,
    //     todo: "Todo 2",
    //     completed: false
    // },
    // {
    //     id: ++count,
    //     todo: "Todo 3",
    //     completed: false
    // },
    // {
    //     id: ++count,
    //     todo: "Todo 4",
    //     completed: false
    // }
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
    // if(todoInput.value.trim() == "")
    // {
        // alert("Todo title cannot be blank!!!")
    // }
    // else
    // {
        console.log(todoListArray)
        todoListArray.pop({
            id: ++count,
            todo: todoInput.value,
            completed: false
        })
        console.log(todoListArray)
        updateFrontend()
    // }
    
}
var editingTodoFlag = -1


function updateFrontend()
{
    let todoList = document.getElementById("todoList")
    let filter = document.getElementById("filterSelect")?.value || "all";
    let filteredTodos = todoListArray.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
    });
    todoList.innerHTML = ""
    for(let index = 0; index<filteredTodos.length; index++)
    {
        // todoList.innerHTML += "<li>"+todoListArray[index]+"</li>"
        if(filteredTodos[index].completed)
            todoList.innerHTML += "<li id="+filteredTodos[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+filteredTodos[index].id+")' checked/><label><s>"+filteredTodos[index].todo+"</s></label><button onclick = 'onEditToDo("+filteredTodos[index].id+")'>Edit</button><button onclick = 'onDeleteToDo("+filteredTodos[index].id+")'>Delete</button></li>"
        else if(editingTodoFlag == filteredTodos[index].id){
            todoList.innerHTML += "<li id="+filteredTodos[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+filteredTodos[index].id+")'/><input value = "+filteredTodos[index].todo+" id = 'editingTodo'></input><button onclick = 'saveToDo("+filteredTodos[index].id+")'>Save To-Do</button><button onclick = 'onDeleteToDo("+filteredTodos[index].id+")'>Delete</button></li>"
        }
        else
             todoList.innerHTML += "<li id="+filteredTodos[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+filteredTodos[index].id+")'/><label>"+filteredTodos[index].todo+"</label><button onclick = 'onEditToDo("+filteredTodos[index].id+")'>Edit</button><button onclick = 'onDeleteToDo("+filteredTodos[index].id+")'>Delete</button></li>"
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
