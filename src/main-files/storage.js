export default class storageManager {
  static setData = (todoItemsRef) => {
    localStorage.setItem('todoItemsRef', JSON.stringify(todoItemsRef));
  }

  static getData = () => (localStorage.getItem('todoItemsRef') ? JSON.parse(localStorage.getItem('todoItemsRef')) : [])
}