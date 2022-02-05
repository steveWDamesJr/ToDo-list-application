import storageManager from './storage.js';

const add = (text) => {
  const userInput = storageManager.getData();
  const todo = {
    listItem: text,
    completed: false,
    id: userInput.length + 1,
  };

  userInput.push(todo);
  storageManager.setData(userInput);
};

export default add;