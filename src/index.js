import './style.css';

const list = document.querySelector('.form-items');

const myList = [
  {
    listItem: 'Play piano at 5',
    completed: false,
    id: 1,
  },
  {
    listItem: 'Watch olympic race at 7',
    completed: false,
    id: 2,
  },
  {
    listItem: 'Go roller blading with Tony',
    completed: false,
    id: 3,
  },
  {
    listItem: 'Dance lesson at 12 noon',
    completed: false,
    id: 4,
  },
];

let htmlList = '';

myList.forEach((item) => {
  htmlList +=`<li class="input-li"><input type="checkbox" name="inputDone" id="inputDone">
    <p class="item-edit" id="${item.id}">${item.listItem}</p>
    <img class="grab" src="https://img.icons8.com/material-outlined/24/000000/menu-2.png" alt="grab">
  </li>`;
});

list.innerHTML = htmlList;