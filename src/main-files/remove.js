import storageManager from './storage.js';

const remove = (id) => {
  const userInput = storageManager.getData();
  const newUserInput = userInput.filter((item) => +item.id !== +id);
  storageManager.setData(newUserInput);
};

export default remove;