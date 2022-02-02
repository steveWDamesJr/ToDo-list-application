const addTodo = require('./todo.js');

test('We want to return an object with three property value pairs', () => {
  expect(addTodo()).toEqual({
    listItem: '',
    completed: false,
    id: 24576465747647,
  });
});