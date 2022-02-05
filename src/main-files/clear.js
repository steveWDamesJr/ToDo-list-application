import storageManager from './storage.js';
import renderTodo from '../modules/status.js';
import update from './update-index.js';







const clearCompleted= ()=> {
  let userInput = storageManager.getData();
  userInput = userInput.filter((task) => task.completed === false);
  storageManager.setData(update(userInput));
  renderTodo();
}










export default clearCompleted;