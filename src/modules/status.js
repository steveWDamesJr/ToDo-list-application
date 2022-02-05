import storageManager from '../main-files/storage.js';

export default function renderTodo() {
  const userInput = storageManager.getData();
  let htmlLi = '';

  userInput.forEach((tasks) => {
    const defaultCompleted = (tasks.completed) ? 'checked' : '';

    htmlLi += `
  <li class="input-li">
  <input class="check" type="checkbox" name="checkbox" id="${tasks.id}" ${defaultCompleted} />
      <p class="task input-li item-edit render-item p${tasks.id}" id="${tasks.id}">${tasks.listItem}</p>
  <button class="delete-todo js-delete-todo"><img src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-delete-user-interface-wanicon-lineal-wanicon.png" class="delete-todo js-delete-todo alt="delete" id="delete"/></button>
  
  <img class="edit" src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-edit-interface-dreamstale-lineal-dreamstale-2.png" alt="edit" />
  </li>
  `;
  });

  const list = document.querySelector('.form-items');
  list.innerHTML = htmlLi;
  const checkboxes = document.querySelectorAll('.check');
  checkboxes.forEach((box) => {
    if (box.checked) {
      box.nextElementSibling.classList.add('line-through');
    } else {
      box.nextElementSibling.classList.remove('line-through');
    }
  });
}
