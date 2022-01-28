let userInput = [];

export function renderTodo(todo) {
  localStorage.setItem('todoItemsRef', JSON.stringify(userInput));
  // localStorage.setItem('task', JSON.stringify(userInput));
  const list = document.querySelector('.form-items');
  const item = document.querySelector(`[data-key='${todo.id}']`);

  if (todo.deleted) {
    item.remove();
    if (userInput.length === 0) list.innerHTML = '';
    return;
  }

  const isCompleted = todo.completed ? 'complete' : '';
  const htmlLi = document.createElement('li');

  htmlLi.setAttribute('class', `input-li ${isCompleted}`);
  // htmlLi.classList.add('input-li');
  htmlLi.setAttribute('data-key', todo.id);
  htmlLi.innerHTML = `
  <input id="${todo.id}" type="checkbox"/>
  <label class="ticked js-tick" for="${todo.id}"></label>
  
  
      <p class="task input-li item-edit render-item" id="${todo.id}">${todo.listItem}</p>


  <button class="delete-todo js-delete-todo"><img src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-delete-user-interface-wanicon-lineal-wanicon.png" class="delete-todo js-delete-todo alt="delete" id="delete"/></button>
  
  <img class="edit" src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-edit-interface-dreamstale-lineal-dreamstale-2.png" alt="edit" />
  `;
  if (item) {
    list.replaceChild(htmlLi, item);
  } else {
    list.append(htmlLi);
  }
}

function toggleDone(key) {
  const index = userInput.findIndex((item) => item.id === Number(key));
  userInput[index].completed = !userInput[index].completed;
  renderTodo(userInput[index]);
}

export function addTodo(text) {
  const todo = {
    listItem: text,
    completed: false,
    id: Date.now(),
  };

  userInput.push(todo);
  renderTodo(todo);
}

function deleteTodo(key) {
  const index = userInput.findIndex((item) => item.id === Number(key));
  const todo = {
    deleted: true,
    ...userInput[index],
  };
  userInput = userInput.filter((item) => item.id !== Number(key));
  renderTodo(todo);
}

const form = document.querySelector('.input-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('.input');
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

const list = document.querySelector('.form-items');

list.addEventListener('click', (event) => {
  if (event.target.classList.contains('.ticked')) {
    const itemKey = event.target;
    console.log(itemKey);
    toggleDone(itemKey);
  }
  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItemsRef');
  if (ref) {
    userInput = JSON.parse(ref);
    userInput.forEach((t) => {
      renderTodo(t);
    });
  }
});

list.addEventListener('click', (event) => {
  const ref = JSON.parse(localStorage.getItem('todoItemsRef'));
  const thisTarget = event.target;
  if (thisTarget.className === 'edit') {
    const currentText = thisTarget.parentElement.querySelector('.task').innerHTML;
    const indexCurrentText = (ref.map((task) => task.listItem).indexOf(currentText));
    const textPar = thisTarget.parentElement.querySelector('.task');
    let changedText = '';
    textPar.contentEditable = true;
    textPar.addEventListener('keyup', () => {
      changedText = textPar.innerHTML;
      if (currentText !== changedText) {
        ref[indexCurrentText].listItem = changedText;
        userInput = ref.filter((input) => input.listItem !== currentText);
        localStorage.setItem('todoItemsRef', JSON.stringify(userInput));
      }
    });
    // console.log(userInput);
  }
});
