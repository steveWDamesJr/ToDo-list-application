/**
 * @jest-environment jsdom
 */

import add from '../main-files/add.js';
import edit from '../main-files/editTasks.js';
import storageManager from '../main-files/storage.js';
import renderTodo from '../modules/status.js';

describe('Edit data in Todo List', () => {
  test('Add data to local storage', () => {
    document.body.innerHTML = `
    <div class="listElementContainer">
        <ul class="form-items">
        
          <!-- ToDo List FROM JS -->

      </ul>
    </div>
    `;
    add('Go to dentist');
    add('Go jogging');
    const data = storageManager.getData();
    expect(data.length).toEqual(2);
    renderTodo();
  });

  test('Check edit function', () => {
    edit(0, 'Have coffee with Emi');

    const data = storageManager.getData();
    expect(data[0].listItem).not.toBe('Go to dentist');
    expect(data[0].listItem).toBe('Have coffee with Emi');
  });

  test('Edit item in DOM', () => {
    let textPar = document.querySelector('.p2');
    textPar.contentEditable = true;
    expect(textPar.contentEditable).toBe(true);
    const changedText = 'Get Sirri to be available';
    const index = +textPar.id - 1;
    edit(index, changedText);
    renderTodo();
    textPar = document.querySelector('.p2');
    expect(textPar.innerHTML).toBe('Get Sirri to be available');
  });
});