import storageManager from './storage.js';

const edit = (index, changedText) => {
  const userInput = storageManager.getData();
  userInput[index].listItem = changedText;
  storageManager.setData(userInput);
};

export default edit;