/**
 * @jest-environment jsdom
 */
const addTodo = require('../main-files/todo.js');
// const jsdom = require("jsdom");
// import { addTodo } from '../index.js';

describe('add and remove', () => {
  window.localStorage = Storage.prototype;
  test('Add task', () => {
    // const todoList = new Task();
    // const { document } = new JSDOM(
    //   `<!DOCTYPE html> <ul class="form-items"> </ul>`
    // ).window;
    // const dom = document.querySelector(".form-items");

    const listToTest = [];
    const text1 = 'text1';

    addTodo(text1, listToTest);
    expect(listToTest).toHaveLength(1);
    // expect(listToTest.length).toEquls(1);
  });
});
