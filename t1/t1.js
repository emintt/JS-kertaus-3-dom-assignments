/* Open t1 folder in your IDE/editor. In t1.js there is an array of todo items called todoList.
 Add the todo items to ul element in t1.html by using insertAdjacentHTML method.
 The structure of the end result should be this:
<li>
   <input type="checkbox" id="todo-1" checked>
   <label for="todo-1">Buy milk</label>
</li>
<li>
   <input type="checkbox" id="todo-2">
   <label for="todo-2">Buy eggs</label>
</li>
<li>
   <input type="checkbox" id="todo-3" >
   <label for="todo-3">Buy bread</label>
</li>
note: if completed property is true, the checkbox should be automatically checked.
4p */

'use strict';
// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
for (const todo of todoList) {
  let checked = '';
  if (todo.completed) {
    // lisätään checked
    checked = 'checked';
  }

  const html = `<li>
      <input type="checkbox" id="todo-${todo.id}" ${checked}>
      <label for="todo-${todo.id}">${todo.task}</label>
    </li>
  `;
  document.querySelector('ul').insertAdjacentHTML('beforeend', html);
}
