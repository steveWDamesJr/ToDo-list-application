/**
 * @jest-environment jsdom
 */

 import renderTodo from '../modules/status.js';
 import storageManager from '../main-files/storage.js';
 import changeCheck from '../main-files/completed.js';
 import add from '../main-files/add.js';
 import clearCompleted from '../main-files/clear.js';
 
 describe('Mark item as completed', () => {
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

  test('Mark completed in localstorage', () => {
    changeCheck(1, true);

    const data = storageManager.getData();
    expect(data[0].completed).toEqual(true);
    expect(data[0].completed).not.toEqual(false);
    renderTodo();
    const p1 = document.querySelector('.p1');
    const stat = p1.classList.contains('line-through');
    expect(stat).toBe(true);

  });

});

describe('Check clear completed', ()=>{
  test('check completed cleared from localStorage & DOM', ()=>{
    add('Get coffee');
    add('Say prayers');
    add('Drink water');
    changeCheck(2, true);
    changeCheck(3, true);
    clearCompleted();
    const data = storageManager.getData();
    expect(data.length).toBe(2);
    const ul =document.querySelector('.form-items');
    expect(ul.childElementCount).toBe(2)

  })
}
)