const { map, filter } = Array.prototype;
const selector = 'ul.todo-list > li';
const todoItems = document.querySelectorAll(selector);

const completedItems = todoItems::filter(item => {
  return item.dataset.completed;
});

const titles = todoItems::map(item => {
  return item.textContent;
});
