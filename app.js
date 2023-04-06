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

  const uniqueId = Date.now().toString();

  let todoValue = document.querySelector(".todo-input").value;
  todoList.innerHTML = `
            <div class="todo-list-value" data-id='${uniqueId}'>
              ${todoValue}
            </div>
              <button class="todo-item-update"><i class="fa-solid fa-pen-to-square"></i></button>
              <button class="todo-item-check"><i class="fa-solid fa-check"></i></button>
              <button class="todo-item-delete"><i class="fa-sharp fa-solid fa-trash"></i></button>
          `;

  listContainer.append(todoList);
  document.querySelector(".todo-input").value = "";

  const deleteButton = todoList.querySelector('.todo-item-delete');
  const updateButton = todoList.querySelector('.todo-item-update');
  const checkButton = todoList.querySelector('.todo-item-check');


  deleteButton.addEventListener('click', deleteTodo);
  updateButton.addEventListener('click', updateTodo);
  checkButton.addEventListener('click', complated);


  taskStoreArray.push(todoList);
  document.querySelector('.totalTaskNumber').innerText = taskStoreArray.length;

  let showNotification = document.querySelector('.notification-added');
  showNotification.style.display = 'block';
  setTimeout(() => { showNotification.style.display = 'none'}, 3000);  
}


// delete 
function deleteTodo(){
  let showTask = document.querySelector('.totalTaskNumber');
  let showDeleteMsg = document.querySelector('.notification-delete');
  showDeleteMsg.style.display = 'block'

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


  setTimeout(() => { showDeleteMsg.style.display = 'none'}, 3000);        
}

// update
function updateTodo(){
  // Overlay Open;
   let taskOverlay = document.querySelector('.overlay');
       taskOverlay.style.display = 'block'

   // Overlay Close;
  let overlayClose = document.querySelector('.overlayClose');
  overlayClose.onclick = () => { taskOverlay.style.display = 'none' }


  // Get the todo item element
  const todoItem = this.parentNode;
  const todoValueElement = todoItem.querySelector(".todo-list-value");
  const currentTodoValue = todoValueElement.innerText;

  const inputField = document.querySelector(".todo-edite-input");
  const updateButton = document.querySelector(".todo-edite-button");

  inputField.value = currentTodoValue;

  updateButton.onclick = () => {
    const newTodoValue = inputField.value;
    todoValueElement.innerText = newTodoValue;

    // Hide the overlay
    taskOverlay.style.display = "none";
}
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



// aside Bar section 
let asideIconRight = document.querySelector('.asideBar-right-icon');
let asideIconLeft = document.querySelector('.asideBar-left-icon')
let asideBar = document.querySelector('.asideBar-taskMenu');

asideIconRight.addEventListener('click', () => { 
    asideIconRight.style.display = 'none'
    asideIconLeft.style.display = 'block'
    asideBar.classList.add('taskMenuActive') 
})

asideIconLeft.addEventListener('click', () => { 
   asideIconLeft.style.display = 'none'
   asideIconRight.style.display = 'block'
  asideBar.classList.remove('taskMenuActive') 
})


function complated(){
  const todoCheck = this.parentNode;
  todoCheck.classList.toggle('check');

  let complatedMsg = document.querySelector('.notification-completed');
  complatedMsg.style.display = 'block';
  setTimeout(() => complatedMsg.style.display = 'none' , 3000)
}