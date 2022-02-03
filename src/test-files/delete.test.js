const deleteTodo = require('../main-files/delete.js');

test('We want to test if an item is removed', () => {
  expect(deleteTodo(5678)).toEqual(5678);
});