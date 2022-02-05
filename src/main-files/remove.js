import storageManager from './storage.js';
import update from './update-index.js';

const remove = (id) => {
  const userInput = storageManager.getData();
  const newUserInput = userInput.filter((item) => +item.id !== +id);
  storageManager.setData(update(newUserInput));
};

export default remove;