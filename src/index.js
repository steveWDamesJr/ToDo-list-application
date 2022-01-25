import './style.css';

const list = document.querySelector('.form-items');

const myList = [
  {
    listItem: '',
    completed: false,
    id: 1,
  },
];

let htmlList = '';

myList.forEach((item) => {
  htmlList += `<li class="input-li"><input type="checkbox" name="inputDone" id="inputDone">
    <p class="item-edit" id="${item.id}">${item.listItem}</p>
    <img class="grab" src="https://img.icons8.com/material-outlined/24/000000/menu-2.png" alt="grab">
  </li>`;
});

list.innerHTML = htmlList;