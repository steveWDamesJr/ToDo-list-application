// import renderTodo from './modules/status.js';

jest.mock('./todo');

function addTodo() {
  return {
    listItem: '',
    completed: false,
    id: 24576465747647,
  };
}

// function addTodo() {
//   return {
//     listItem: '',
//     completed: false,
//     // id: Date.now(),
//   };

module.exports = addTodo;
