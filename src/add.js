import { renderTodo, userInput } from './modules/index.js';

export default function addTodo(text) {
  const todo = {
    listItem: text,
    completed: false,
    id: Date.now(),
  };

  userInput.push(todo);
  renderTodo(todo);
}
