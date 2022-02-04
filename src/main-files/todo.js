// const userInput = localStorage.getItem("todoItemsRef");
import renderTodo from '../modules/status.js';

function addTodo(someThing, someArr) {
  const todo = {
    listItem: someThing,
    completed: false,
    id: Date.now(),
  };

  someArr.push(todo);
  //  renderTodo(someArr);
}

module.exports = addTodo;
