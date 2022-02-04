/**
 * @jest-environment jsdom
 */

import renderTodo from '../modules/status.js';
import storageManager from '../main-files/storage.js';
import add from '../main-files/add.js';
import remove from '../main-files/remove.js';

describe('Saving and displaying list from local storage', () => {
  test("Add data to local storage", () => {
    add('Go to dentist');
    let data = storageManager.getData();
    expect(data.length).toEqual(1);
    add('Go jogging');
    data = storageManager.getData();
    expect(data.length).toEqual(2);
  });

  test("Check update of DOM", () => {
    document.body.innerHTML = `
    <div class="listElementContainer">
        <ul class="form-items">
        
          <!-- ToDo List FROM JS -->

      </ul>
    </div>
    `;
    add('Go to food store');
    add('Go to KFC');
    add('Go to Beverage Place');
    add('Go to beach');
    add('Go to clean the car');
    renderTodo();
    const list = document.querySelector('.form-items');
    expect(list.childElementCount).toBe(7);
  });
});

describe('Test remove function', () => {
  test("Check item is removed from local storage", () => {
    remove(1);
    expect(storageManager.getData().length).toEqual(6);
    remove(2);
    remove(3);
    remove(4);
    expect(storageManager.getData().length).toEqual(3);
  });
  test("Check item is removed from DOM", () => {
    renderTodo();
    const list = document.querySelector('.form-items');
    expect(list.childElementCount).toBe(3);
  });
});
