var ArrayProto = Array.prototype;
var map = ArrayProto.map;
var filter = ArrayProto.filter;

var todoItems = document.querySelectorAll('ul.todo-list > li');

var completedItems = filter.call(todoItems, function(item) {
  return item.dataset.completed;
});

var titles = map.call(todoItems, function(item) {
  return item.textContent;
});
