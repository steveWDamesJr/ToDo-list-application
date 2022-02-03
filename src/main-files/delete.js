




const myObjects = [{
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
}];

module.exports = function deleteTodo(key) {
  
  return myObjects.id.filter(key);
  // return myObjects.filter(key.id);
};
