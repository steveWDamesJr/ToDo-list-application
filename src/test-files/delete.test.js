const deleteTodo = require('../main-files/delete.js');

test('We want to test if an item is removed', () => {
  expect(deleteTodo(5578)).toEqual(5578);
});