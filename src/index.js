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
import edit from './main-files/editTasks.js';
import changeCheck from './main-files/completed.js';
import clearCompleted from './main-files/clear.js';
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
  // const ref = JSON.parse(localStorage.getItem('todoItemsRef'));
  const thisTarget = event.target;
  if (thisTarget.className === 'edit') {
    // const currentText = thisTarget.parentElement.querySelector('.task').innerHTML;
    // const indexCurrentText = (ref.map((task) => task.listItem).indexOf(currentText));
    const textPar = thisTarget.parentElement.querySelector('.task');
    let changedText = '';
    const currentText = textPar.innerHTML;
    textPar.contentEditable = true;
    textPar.addEventListener('blur', () => {
      changedText = textPar.innerHTML;
      if (currentText !== changedText) {
        const index = +textPar.id - 1;
        edit(index, changedText);
      }
    });
  }
});

list.addEventListener('change', (event) => {
  const thisTarget = event.target;
  const textPtag = thisTarget.parentElement.querySelector('.task');
  
  const checkboxToTick = thisTarget.parentElement.querySelector('.check');
  const index = checkboxToTick.id;
  const status = checkboxToTick.checked;
  if (status) {
    textPtag.classList.add('line-through');
  } else {
    textPtag.classList.remove('line-through');
  }
  changeCheck(index, status);
});

clearAllBtn.addEventListener('click', () => {
  clearCompleted();
});