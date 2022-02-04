/**
 * @jest-environment jsdom
 */

// import renderTodo from '../modules/status.js';
import storageManager from '../main-files/storage.js';
import add from '../main-files/add.js';
// import remove from '../main-files/remove.js';

describe('Saving and displaying list from local storage', () => {
  test("Add data to local storage", () => {
    add('Go to dentist');
    let data = storageManager.getData();
    expect(data.length).toEqual(1);
    add('Go jogging');
    data = storageManager.getData();
    expect(data.length).toEqual(2);
  });
});
