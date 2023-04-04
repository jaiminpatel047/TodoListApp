// selecter
let button = document.querySelector(".todo-button");
const inputFild = document.querySelector(".todo-input");
let todoValue = document.querySelector(".todo-input").value;
let listContainer = document.querySelector(".todo-list");
let toastBox = document.querySelector(".toster");
let formCss = document.querySelector('.form');
let task = document.querySelectorAll('.todo-list-item');

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
  updateButton.addEventListener('click', updateTodo)
}

function deleteTodo(){
    const todoItem = this.parentNode;
    todoItem.remove();
}

function updateTodo(){
    console.log("update");
}
