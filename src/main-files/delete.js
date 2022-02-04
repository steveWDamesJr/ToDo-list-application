const myObjects = [
  {
    listItem: 'Hello',
    completed: false,
    id: 5678,
  },
  {
    listItem: 'Why',
    completed: false,
    id: 5698,
  },
  {
    listItem: 'This',
    completed: false,
    id: 5578,
  },
  {
    listItem: 'This',
    completed: false,
    id: 5578,
  },
];

let result = [];
module.exports = function deleteTodo(key) {
  for (let i = 0; i < myObjects.length; i += 1) {
    const myObj = myObjects[i];
    if (myObj.id === key) {
      result = myObjects.splice(i, 1);
      return result[0].id;
    }
  }
};
