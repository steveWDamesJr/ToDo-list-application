import './style.css';


let userInput = [];

function renderTodo(todo) {
  const list = document.querySelector('.form-items');
  
  const isCompleted = todo.completed ? 'complete': '';

  const htmlLi = document.createElement("li");
  htmlLi.setAttribute('class', `todo-item ${isCompleted}`);
  htmlLi.classList.add('input-li')
  htmlLi.setAttribute('data-key', todo.id);

  htmlLi.innerHTML = `
  <input id="${todo.id}" type="checkbox" />
  <p class="item-edit" id="${todo.id}">${todo.listItem}</p>
  <img class="grab" src="https://img.icons8.com/material-outlined/24/000000/menu-2.png" alt="grab">`;
  
  list.append(htmlLi);
}


function addTodo(text) {
  const todo = {
    listItem: text,
    completed: false,
    id: Date.now(),
  };
  
  userInput.push(todo);
  renderTodo(todo);
}

const form = document.querySelector('.input-container');

form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.input');
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});