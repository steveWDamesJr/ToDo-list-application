import './style.css';

import {
  dateElement,
  options,
  today,
} from './modules/date.js';
import renderTodo, {
  list,
} from './modules/status.js';

dateElement.innerHTML = today.toLocaleDateString('en-US', options);
const clearAllBtn = document.querySelector('.clear-todos');
let userInput = localStorage.getItem('todoItemsRef')
  ? JSON.parse(localStorage.getItem('todoItemsRef')) : [];


function addTodo(text) {
  const todo = {
    listItem: text,
    completed: false,
    id: Date.now(),
  };

  userInput.push(todo);
  renderTodo(userInput);
}
function deleteTodo(key) {
  const li = key.parentElement.parentElement;
  const title = li.querySelector('.task').textContent;
  userInput = userInput.filter((item) => item.listItem !== title);

  localStorage.setItem('todoItemsRef', JSON.stringify(userInput));

  key.parentElement.parentElement.remove();
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


list.addEventListener('click', (event) => {
  const deletebtn = event.target;
  if (deletebtn.id === 'delete') {
    deleteTodo(deletebtn);

  }
});

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItemsRef');
  if (ref) {
    userInput = JSON.parse(ref);
    renderTodo(userInput);
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
  }
});

list.addEventListener('change', (event) => {
  const thisTarget = event.target;

  const checkboxToTick = thisTarget.parentElement.querySelector('.check');

  const textPtag = thisTarget.parentElement.querySelector('.task');

  userInput.forEach((task) => {
    if (checkboxToTick.checked === true) {
      if (task.listItem === textPtag.innerHTML) {
        textPtag.classList.add('line-through');
        task.completed = true;
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (task.listItem === textPtag.innerHTML) {
        textPtag.classList.remove('line-through');
        task.completed = false;
      }
    }
  });
  localStorage.setItem('todoItemsRef', JSON.stringify(userInput));
});

clearAllBtn.addEventListener('click', () => {
  userInput = userInput.filter((task) => task.completed === false);
  renderTodo(userInput);
});