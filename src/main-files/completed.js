import storageManager from './storage.js';

const changeCheck = (index, status) => {
    const userInput = storageManager.getData();
    userInput[index - 1].completed = status;
    storageManager.setData(userInput);
}

export default changeCheck;
