import './style.css';
import storageManager from './main-files/storage.js';
import {
  dateElement,
  options,
  today,
} from './modules/date.js';
import renderTodo from './modules/status.js';
import add from './main-files/add.js';
import remove from './main-files/remove.js';

const list = document.querySelector('.form-items');

dateElement.innerHTML = today.toLocaleDateString('en-US', options);
const clearAllBtn = document.querySelector('.clear-todos');
function addTodo(text) {
  add(text);
  renderTodo();
}
function deleteTodo(key) {
  const li = key.parentElement.parentElement;
  const title = li.querySelector('.task').id;
  remove(title);
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
  renderTodo();
});

list.addEventListener('click', (event) => {
  let userInput = storageManager.getData();
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
        storageManager.setData(userInput);
      }
    });
  }
});

list.addEventListener('change', (event) => {
  const userInput = storageManager.getData();
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
  storageManager.setData(userInput);
});

clearAllBtn.addEventListener('click', () => {
  let userInput = storageManager.getData();
  userInput = userInput.filter((task) => task.completed === false);
  storageManager.setData(userInput);
  renderTodo();
});