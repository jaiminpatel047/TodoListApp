// selecter
let button = document.querySelector(".todo-button");
const inputFild = document.querySelector(".todo-input");
let todoValue = document.querySelector(".todo-input").value;
let listContainer = document.querySelector(".todo-list");
let toastBox = document.querySelector(".toster");
let formCss = document.querySelector('.form');
let task = document.querySelectorAll('.todo-list-item');
let taskIconButton = document.querySelector('.taskCound');
let overlayTaskApper = document.querySelector('.taskEditeOverlay')

// function
button.addEventListener("click", () => {
  let todoValue = document.querySelector(".todo-input").value;

  if (todoValue !== "") {
    todoTask();
    toastBox.style.display = 'none';
    formCss.style.backgroundColor = 'rgb(181, 126, 54)';
  } else {
    toastBox.style.display = 'block';
    formCss.style.backgroundColor = 'var(--brown-color)';

    setTimeout(() => {
        formCss.style.backgroundColor = 'rgb(181, 126, 54)';
        toastBox.style.display = 'none';
    }, 3000);
  }

});


const taskStoreArray = [];

// TODO TASK
function todoTask() {
  let todoList = document.createElement("div");
  todoList.classList.add("todo-list-item");

  let todoValue = document.querySelector(".todo-input").value;
  todoList.innerHTML = `
            <div class="todo-list-value">
              ${todoValue}
            </div>
              <button class="todo-item-update"><i class="fa-solid fa-pen-to-square"></i></button>
              <button class="todo-item-delete"><i class="fa-sharp fa-solid fa-trash"></i></button>
          `;

  listContainer.append(todoList);
  document.querySelector(".todo-input").value = "";

  const deleteButton = todoList.querySelector('.todo-item-delete');
  const updateButton = todoList.querySelector('.todo-item-update');
  deleteButton.addEventListener('click', deleteTodo);
  updateButton.addEventListener('click', updateTodo);


  taskStoreArray.push(todoList);
  document.querySelector('.totalTaskNumber').innerText = taskStoreArray.length;
  console.log(taskStoreArray.length + " : " + taskStoreArray);
}


// delete 
function deleteTodo(){
  let showTask = document.querySelector('.totalTaskNumber');

    const todoItem = this.parentNode;
    todoItem.remove();
  
     taskStoreArray.pop(todoItem)
     // if(taskStoreArray.length === 0){
     //    showTask.innerText = null;
     // }else{
     //    showTask.innerText = taskStoreArray.length;
     // }

     // ES6 if condition 
     taskStoreArray.length === 0?showTask.innerText = null:showTask.innerText = taskStoreArray.length;
     
}

// update
function updateTodo(){
   let taskOverlay = document.querySelector('.overlay');
       taskOverlay.style.display = 'block'

   let overlayClose = taskOverlay.
   overlayClose.onClick = () => { taskOverlay.style.display = 'none' }
}

// Task Icon Show
taskIconButton.onclick = () =>{
  let taskIcon = document.querySelector('.taskShowIcon');
  let totalTask = document.querySelector('.taskDisplay');

  taskIconButton.classList.toggle('active');

  // if(taskIconButton.classList.contains('active')){
  //     taskIcon.style.display = 'none';
  //     totalTask.style.display = 'block';
  // }else{
  //     taskIcon.style.display = 'block';
  //     totalTask.style.display = 'none';
  // }

  // ES6 if condition
  taskIconButton.classList.contains('active')
  ? (taskIcon.style.display = 'none', totalTask.style.display = 'block')
  : (taskIcon.style.display = 'block', totalTask.style.display = 'none');
}

// Overlay

